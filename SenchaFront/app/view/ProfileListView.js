/**
 * View that displays available profiles in a list.
 */
Ext.define('SenchaFront.view.ProfileListView', {
    extend: 'Ext.dataview.List',
    requires:   [
          'Ext.Toolbar'
        , 'Ext.data.Store'
        //, 'SenchaFront.form.ProfileForm'
        , 'Ext.plugin.ListSwipeAction'],
    xtype: 'profilelistview',


    config: {
        store: 'Profiles',
        itemTpl: '{name} ({station_id})',
        scrollable: true


        , plugins: {
            type: 'listswipeaction',
            removeText: 'Delete'
        }

        /*
        // Toolbar
        , items: {
            docked: 'top',
            title: 'Profiles',
            xtype: 'toolbar',
            inline: true,
            items: [
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    iconCls: 'add',
                    ui: 'action',
                    id: 'addProfileButton'
                }
            ]
        }
        */
    }
});
