Ext.onReady(function() {

    Ext.QuickTips.init();
    Ext.create('Ext.Viewport', {
        id: 'main-panel',
        layout: 'border',
        items: [{
            region       : 'west',
            id           : 'west-panel',
            title        : 'west',
            split        : true,
            collapsible  : true,
            animCollapse : true,
            width        : 200,
            minWidth     : 175,
            maxWidth     : 250,
            layout       : 'accordion',
            items: [{
                title   : 'Navigation',
                iconCls : 'nav'
            }, {
                title   : 'settings',
                iconCls : 'settings',
                html    : '<p>some settings here</p>'
            }, {
                title   : 'Infomation',
                iconCls : 'info',
                html    : '<p>some Info here</p>'
            }]

        }, {
            xtype  : 'tabpanel',
            region : 'center',
            id     : 'center-panel',
            items : [{
                title : 'TAB1',
                closable : true,
                autoScroll : true
            }, {
                title : 'TAB2',
                autoScroll : true
            }]
        }]
    })
});
