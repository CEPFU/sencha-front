Ext.define('SenchaFront.store.Profiles', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.LocalStorage'],
    config: {
        model: 'SenchaFront.model.Profile',
        storeId: 'profiles',
        autoLoad: true
    }
});
