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
        items: [
            {
                title: 'Profiles',
                xtype: 'list',
                ui: 'sencha',
                store: 'profiles',
                itemTpl: '{name}',
                scrollable: true,

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
            items: [
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    id: 'addProfileButton',
                    iconCls: 'add'
                }
            ]
        }
    }
});
