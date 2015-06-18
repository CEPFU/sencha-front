Ext.define('SenchaFront.form.ProfileForm', {
    extend: 'Ext.form.Panel',
    xtype: 'profileform',
    
    config: {
        title: 'Edit Profile',
        
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
                ui: 'confirm',
                id: 'profileFormSubmitButton'
            }
        ]        
    }
});
