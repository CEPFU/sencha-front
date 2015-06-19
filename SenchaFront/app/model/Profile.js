Ext.define('SenchaFront.model.Profile', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.proxy.LocalStorage'],
    config: {
        fields: [
            { name: 'name', type: 'string' }
        ],
        associations: [
            {
                type: 'hasOne',
                model: 'SenchaFront.model.Station',
                primaryKey: 'stationId',
                autoload: true
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
