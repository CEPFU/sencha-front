Ext.define('SenchaFront.store.Profiles', {
    extend: 'Ext.data.Store',

    requires: [
        'SenchaFront.model.Profile'
    ],

    config: {
        model: 'SenchaFront.model.Profile',
        storeId: 'profiles',
        autoLoad: true
    }
});
