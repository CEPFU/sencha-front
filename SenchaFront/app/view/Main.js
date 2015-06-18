Ext.define('SenchaFront.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    requires: [
        'SenchaFront.view.ProfileListView'
    ],
    config: {
        fullscreen: true,
        items: [
            {
                title: 'Profiles',
                xtype: 'profilelistview'
            }
        ]
    }
});
