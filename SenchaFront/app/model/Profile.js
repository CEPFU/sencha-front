Ext.define('SenchaFront.model.Profile', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.proxy.LocalStorage'],
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
