Ext.define('SenchaFront.form.ProfileForm', {
    extend: 'Ext.form.Panel',
    xtype: 'profileform',
    searchTimeout: 1000, // how long to wait after a keyup event before searching
    stationStore: null,
    station: null,
    searchTask: Ext.create('Ext.util.DelayedTask',
        function (form, searchText) {
            form.stationStore.filter('stationName', searchText);
            var newStation = null;
            if (searchText != "") {
                if (form.stationStore.getCount() > 0) {
                    // for now use the first result
                    newStation = form.stationStore.first();
                }
            }

            form.setStation(newStation);

            form.stationStore.clearFilter();
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

                        form.searchTask.setArgs([form, value]);
                        form.searchTask.delay(form.searchTimeout);
                    }
                }
            },
            {
                xtype: 'button',
                text: 'Submit',
                ui: 'confirm',
                itemId: 'submitButton'
            }
        ],
        listeners: {
            show: function (form) {
                this.stationStore = Ext.StoreManager.get('stations');

                // Load information about the station from the store
                // This is faster than using getRecord().getStation(),
                // since it doesn't send a request to the server
                var stationId = form.getRecord().get('station_id');
                var station = this.stationStore.getById(stationId);

                this.setStation(station);
            }
        }
    }
});
