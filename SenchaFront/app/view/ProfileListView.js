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
        itemTpl: '{name}',
        scrollable: true,
        plugins: {
            type: 'listswipeaction',
            deleteButton: true
        }
    }
});
