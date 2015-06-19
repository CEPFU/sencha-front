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
                form.stationStore = Ext.StoreManager.get('stations');

                // This is nice, but it sends a request to the server
                form.getRecord().getStation(function(s) {
                    form.setStation(s)
                });
            }
        }
    }
});
