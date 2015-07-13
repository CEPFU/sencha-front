Ext.define('SenchaFront.form.ProfileForm', {
    extend: 'Ext.form.Panel',
    xtype: 'profileform',

    requires: [
        'Ext.data.StoreManager',
        'Ext.field.Number',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.util.DelayedTask'
    ],

    searchTimeout: 1000, // how long to wait after a keyup event before searching
    station: null,
    searchTask: Ext.create('Ext.util.DelayedTask',
        function (view, form, searchText) {
            var store = Ext.StoreManager.get('stations');
            store.clearFilter();
            store.filter('stationName', searchText);
        }
    ),

    setStation: function (station) {
        this.station = station;
        if (station != null)
            this.getComponent('stationTextField').setValue(station.get('stationName'));
    },

    config: {
        title: 'Edit Profile',
        id: 'profileForm',
        
        items: [
            {
                name: 'name',
                xtype: 'textfield',
                label: 'Name'
            },
            {
                name: 'station',
                xtype: 'textfield',
                label: 'Station',
                itemId: 'stationTextField',
                listeners: {
                    keyup: function (field) {
                        var form = field.getParent();
                        var value = field.getValue();
                        var view = form.getParent();

                        form.searchTask.setArgs([view, form, value]);
                        form.searchTask.delay(form.searchTimeout);
                    }
                }
            },
            {
                name: 'attribute',
                label: 'Attribute',
                xtype: 'selectfield',
                options: [
                    {text: 'Temperature', value: 'temperature'},
                    {text: 'Wind Speed', value: 'windSpeed'},
                    {text: 'Humidity', value: 'atmosphereHumidity'}
                ]
            },
            {
                name: 'operator',
                label: 'Operator',
                xtype: 'selectfield',
                options: [
                    {text: '=', value: 'equal'},
                    {text: '<', value: 'less'},
                    {text: '<=', value: 'lessEqual'},
                    {text: '>', value: 'greater'},
                    {text: '>=', value: 'greaterEqual'}
                ]
            },
            {
                name: 'value',
                label: 'Value',
                xtype: 'numberfield',
                placeHolder: "0"
            }
        ]
    }
});
