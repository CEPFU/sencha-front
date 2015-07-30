Ext.define('SenchaFront.controller.MainController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.data.StoreManager',
        'SenchaFront.model.Profile',
        'SenchaFront.view.ProfileFormView'
    ],

    config: {
        refs: {
            addProfileButton: '#addProfileButton',
            profileList: '#profileList',
            navigationView: '#navigationView',
            profileForm: '#profileForm',
            profileFormView: {
                selector: '#profileFormView',
                xtype: 'profileformview',
                autoCreate: true
            }
        },
        control: {
            addProfileButton: {
                tap: 'addProfile'
            },
            profileList: {
                itemtap: 'listItemTapped'
            },
            navigationView: {
                pop: 'pop'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {

    },

    getStore: function() {
        return Ext.StoreMgr.get('profiles');
    },

    addProfile: function() {
        var newRecord = Ext.create('SenchaFront.model.Profile', {
            name: 'New Profile'
        });
        var store = this.getStore();
        store.add(newRecord);
        store.sync();
        this.editProfile(newRecord);
    },

    listItemTapped: function(view, index, element, record) {
        this.editProfile(record);
    },

    editProfile: function(record) {
        var navView = this.getNavigationView();
        var formView = this.getProfileFormView();
        var form = formView.getComponent('profileForm');
        formView.getComponent('submitButton').addListener('tap', this.submitProfileForm, this);
        form.setRecord(record);
        navView.push(formView);
        this.getAddProfileButton().hide();
    },

    pop: function(navView, poppedView) {
        if (poppedView == this.getProfileFormView()) {
            Ext.StoreManager.get('stations').clearFilter();
            this.getAddProfileButton().show();
        }
    },

    submitProfileForm: function() {
        var form = this.getProfileForm();
        var values = form.getValues();
        var record = form.getRecord();
        values.location_id = form.station.get('locationId');

        record.beginEdit();
        var oldData = record.getData();
        for (var key in oldData) {
            if (oldData.hasOwnProperty(key) && values.hasOwnProperty(key)) {
                record.set(key, values[key]);
            }
        }
        record.endEdit();
        this.getStore().sync();

        // TODO: Have a list of conditions in the profile form and set 'conditions' to that
        var conditions = [
            {
                operator: values.operator,
                attribute: values.attribute,
                value: values.value
            }
        ];

        // TODO: Add option to form
        // Mode is all, if not: any
        var all = true;

        // TODO: Use push service identifier?!
        var deviceID = "TestDevice";

        var profile = this.profileObject(conditions, all, values.location_id, deviceID);

        console.log(JSON.stringify(profile));

        // Send DSL Code to backend
        Ext.Ajax.request({
            url: 'http://localhost:8080/profile',
            method: 'POST',
            callback: function(options, success, response) {
                console.log(response.responseText);
            },
            withCredentials: false,
            useDefaultXhrHeader: false,
            jsonData: profile
        });

        this.getNavigationView().pop();
    },

    profileObject: function(conditions, all, stationID, deviceID) {
        var operands = [];

        for (var i = 0, len = conditions.length; i < len; i++) {
            var cond = conditions[i];

            var op = {
                "@class": "JSONMatchToStation",
                matchOperator: {
                    "@class": "JSON" + cond.operator,
                    attribute: cond.attribute,
                    toObject: cond.value
                },
                toStation: stationID
            };

            operands.push(op);
        }

        return {
            rule: {
                "@class": all ? "JSONAnd" : "JSONOr",
                ofOperands: operands
            },
            notifications: [
                {
                    // TODO: Insert PushNotification
                    "@class": "JSONVerboseNotification",
                    message: "Notification for device: " + deviceID
                }
            ]
        }
    }
});
