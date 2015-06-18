Ext.define('SenchaFront.model.Station', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'stationId', type: 'int' },
            { name: 'stationPosition', type: 'auto' },
            { name: 'fromDate', type: 'date' },
            { name: 'untilDate', type: 'date' },
            { name: 'stationHeight', type: 'integer' },
            { name: 'stationName', type: 'string' },
            { name: 'federalState', type: 'string' }
        ]
    }
});
