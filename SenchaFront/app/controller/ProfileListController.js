Ext.define('SenchaFront.controller.ProfileListController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            addProfileButton: '#addProfileButton'
        },
        control: {
            addProfileButton: {
                tap: 'addProfile'
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
        // this.editProfile(newRecord);
    }
});
