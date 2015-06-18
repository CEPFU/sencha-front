Ext.define('SenchaFront.form.ProfileForm', {
    extend: 'Ext.form.Panel',
    xtype: 'profileform',
    station: null,

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
                itemId: 'stationTextField'
            },
            {
                xtype: 'button',
                text: 'Submit',
                ui: 'confirm',
                itemId: 'submitButton'
            }
        ],
        listeners: {
            show: function(form) {
                var stationId = form.getRecord().get('station_id');
                var stationStore = Ext.StoreManager.get('stations');
                this.station = stationStore.getById(stationId);
                if (this.station != null)
                    this.getComponent('stationTextField').setValue(this.station.get('stationName'));
            }
        }
    }
});
