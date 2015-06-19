Ext.define('SenchaFront.view.ProfileFormView', {
    extend: 'Ext.Panel',
    xtype: 'profileformview',
    requires: [
        'Ext.dataview.List',
        'SenchaFront.form.ProfileForm',
        'Ext.util.DelayedTask'
    ],

    setStoreTask: Ext.create('Ext.util.DelayedTask', function (list) {
        list.setStore('stations');
    }),

    config: {
        ui: 'sencha',
        fullscreen: true,
        id: 'profileFormView',
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'profileform',
                ui: 'sencha',
                id: 'profileForm',
                flex: 1
            },
            {
                xtype: 'list',
                itemId: 'stationList',
                itemTpl: '{stationName}, {federalState}',
                flex: 2
            },
            {
                xtype: 'button',
                text: 'Submit',
                ui: 'confirm',
                itemId: 'submitButton'
            }
        ],
        listeners: {
            show: function (view) {
                // Set store delayed since it takes a moment
                var list = view.getComponent('stationList');
                this.setStoreTask.setArgs([list]);
                this.setStoreTask.delay(500);
                list.addListener('itemtap', this.selectStation, this);

                var form = view.getComponent('profileForm');
                var store = Ext.StoreManager.get('stations');

                // Load information about the station from the store
                // This is faster than using getRecord().getStation(),
                // since it doesn't send a request to the server
                var stationId = form.getRecord().get('station_id');
                var station = store.getById(stationId);

                form.setStation(station);
            }
        }
    },

    selectStation: function (list, index, item, station) {
        this.getComponent('profileForm').setStation(station);
    }
});
