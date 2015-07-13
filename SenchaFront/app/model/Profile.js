Ext.define('SenchaFront.model.Profile', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.identifier.Uuid',
        'Ext.data.proxy.LocalStorage',
        'SenchaFront.model.Station'
    ],
    config: {
        fields: [
            { name: 'name', type: 'string' }
        ],
        hasOne: [
            {
                model: 'SenchaFront.model.Station',
                primaryKey: 'stationId'
            }
        ],
        identifier: {
            type: 'uuid'
        },
        proxy: {
            type: 'localstorage',
            id: 'weatherprofiles'
        }
    }
});
