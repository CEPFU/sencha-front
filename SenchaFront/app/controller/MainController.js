Ext.define('SenchaFront.controller.MainController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            addProfileButton: '#addProfileButton',
            profileList: '#profileList',
            navigationView: '#navigationView',
            profileForm: {
                selector: '#profileForm',
                xtype: 'profileform',
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
        var form = this.getProfileForm();
        form.getComponent('submitButton').addListener('tap', this.submitProfileForm, this);
        form.setRecord(record);
        navView.push(form);
        this.getAddProfileButton().hide();
    },

    pop: function(navView, poppedView) {
        if (poppedView == this.getProfileForm()) {
            this.getAddProfileButton().show();
        }
    },

    submitProfileForm: function() {
        var form = this.getProfileForm();
        var values = form.getValues();
        var record = form.getRecord();
        values.station_id = form.station.get('stationId');

        record.beginEdit();
        var oldData = record.getData();
        for (var key in oldData) {
            if (oldData.hasOwnProperty(key) && values.hasOwnProperty(key)) {
                record.set(key, values[key]);
            }
        }
        record.endEdit();
        this.getStore().sync();

        this.getNavigationView().pop();
    }
});
