Ext.define('SenchaFront.view.ProfileForm', {
    extend: 'Ext.form.Panel',
    xtype: 'profileform',
    
    config: {
        title: 'ProfileForm',
        
        items: [
            {
                name: 'name',
                xtype: 'textfield',
                label: 'Name'
            },
            {
                name: 'station',
                xtype: 'textfield',
                label: 'Station'
            },
            {
                xtype: 'button',
                text: 'Submit',
                ui: 'confirm'
            }
        ]        
    }
});
