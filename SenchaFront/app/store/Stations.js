Ext.define('SenchaFront.store.Stations', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],
    config: {
        model: 'SenchaFront.model.Station',
        storeId: 'stations',
        autoLoad: true,
        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/stations',
            reader: {
                type: 'json'
            },
            callbackKey: 'callback'
        }
    }
});
