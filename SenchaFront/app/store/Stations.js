Ext.define('SenchaFront.store.Stations', {
    extend: 'Ext.data.Store',
    requires: [
        'SenchaFront.model.Station'
    ],
    config: {
        model: 'SenchaFront.model.Station',
        storeId: 'stations',
        autoLoad: true
    }
});
