Ext.define('SenchaFront.model.Station', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        idProperty: 'stationId',
        fields: [
            { name: 'stationId', type: 'int' },
            { name: 'stationPosition', type: 'auto' },
            { name: 'fromDate', type: 'date' },
            { name: 'untilDate', type: 'date' },
            { name: 'stationHeight', type: 'integer' },
            { name: 'stationName', type: 'string' },
            { name: 'federalState', type: 'string' }
        ],
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
