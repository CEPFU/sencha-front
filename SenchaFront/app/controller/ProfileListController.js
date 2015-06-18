Ext.define('SenchaFront.controller.ProfileListController', {
    extend: 'Ext.app.Controller',

    requires: [
        'SenchaFront.form.ProfileForm'
    ],
    
    config: {
        refs: {
            addProfileButton: '#addProfileButton',
            profileList: '#profileList',
            navigationView: '#navigationView'
        },
        control: {
            addProfileButton: {
                tap: 'addProfile'
            },
            profileList: {
                itemtap: 'listItemTapped'
            },
            navigationView: {
                back: 'goBack'
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
        // Make the profile edit form
        var form = Ext.create('SenchaFront.form.ProfileForm');
        form.setRecord(record);
        navView.push(form);
        this.getAddProfileButton().hide();
    },

    goBack: function() {
        this.getAddProfileButton().show();
    }
});
