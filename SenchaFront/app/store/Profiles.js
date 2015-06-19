Ext.define('SenchaFront.store.Profiles', {
    extend: 'Ext.data.Store',
    config: {
        model: 'SenchaFront.model.Profile',
        storeId: 'profiles',
        autoLoad: true
    }
});
