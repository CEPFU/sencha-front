Ext.define('SenchaFront.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    requires: [
        'Ext.plugin.ListSwipeAction',
        'Ext.dataview.List'
    ],
    config: {
        ui: 'sencha',
        fullscreen: true,
        id: 'navigationView',
        items: [
            {
                title: 'Profiles',
                xtype: 'list',
                ui: 'sencha',
                store: 'profiles',
                itemTpl: '{name}',
                scrollable: true,
                id: 'profileList',

                plugins: [
                    {
                        type: 'listswipeaction',
                        deleteButton: true,
                        ui: 'sencha',
                        syncDelete: true
                    }
                ]
            }
        ],
        navigationBar: {
            ui: 'sencha',
            id: 'navigationBar',
            items: [
                {
                    xtype: 'button',
                    id: 'addProfileButton',
                    iconCls: 'add'
                }
            ]
        }
    }
});
