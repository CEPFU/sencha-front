Ext.define('SenchaFront.model.Station', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        idProperty: 'locationId',
        fields: [
            { name: 'locationId', type: 'int' },
            { name: 'locationPosition', type: 'auto' },
            { name: 'locationDescription', type: 'string' },
        ],
        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/location',
            reader: {
                type: 'json'
            },
            callbackKey: 'callback'
        }
    }
});
