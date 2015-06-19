Ext.define('SenchaFront.store.Stations', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],
    config: {
        model: 'SenchaFront.model.Station',
        storeId: 'stations',
        autoLoad: true
    }
});
