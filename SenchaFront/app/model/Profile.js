Ext.define('SenchaFront.model.Profile', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'name', type: 'string' }
        ],
        associations: [
            {
                type: 'hasOne',
                model: 'SenchaFront.model.Station'
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
