Ext.onReady(function() {

    Ext.QuickTips.init();

    //init layout objects
    var layoutExamples = [];

    var basicLayoutObj = getBasicLayout();
    Ext.Object.each(basicLayoutObj, function(key, value, myselef) {
        layoutExamples.push(value);
    });

    //init treestore
    var store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true
        },
        proxy: {
            type: 'ajax',
            url: 'data/tree-data.json'
        }
    });

    //init the tree panel
    var treePanel = Ext.create('Ext.tree.Panel', {
        id: 'tree-panel',
        autoScroll: true,
        rootVisible: false,
        store: store
    });

    var detailEl;
    //select listener
    treePanel.getSelectionModel().on('select', function(sm, record) {
        if (record.get('leaf')) {
            var key = record.get('id');
            if (basicLayoutObj[key] !== null) {
                Ext.getCmp('content-panel').layout.setActiveItem(key + '-panel');
            }

            if (!detailEl) {
                var bd = Ext.getCmp('detail-panel').body;
                bd.update('').setStyle('background', '#FFFFF');
                detailEl = bd.createChild();
            }
            detailEl.hide().update(Ext.getDom(record.getId() + '-detail').innerHTML).slideIn('l', {
                duration: 200
            });
        }

    });

    var html,
        win = Ext.create('Ext.window.Window', {
            title: 'Code Preview',
            id: 'code-win',
            autoScroll: true,
            html: html,
            maximized: true,
            closeAction: 'hide',
            bodyStyle: {
                background: 'rgb(199,237,204)'
            }
        });
    win.on('beforeshow', function(win, opt) {
        win.update(html);
    });
    Ext.create('Ext.fx.Anim', {
        target: win,
        duration: 1000

    });

    function onMaximizeClick(event, toolEl, panelHeader) {
        // var html = Ext.getDom('column-detail').innerHTML;
        html = panelHeader.up('#detail-panel').body.getHTML();
        win.show();
    }

    //center panel
    var contentPanel = {
        id: 'content-panel',
        region: 'center',
        layout: 'card',
        activeItem: 0,
        border: false,
        items: layoutExamples
    };

    //build the main layout with the viewport
    Ext.create('Ext.Viewport', {
        id: 'main-panel',
        layout: 'border',
        items: [{
                region: 'west',
                id: 'west-panel',
                title: 'west',
                split: true,
                collapsible: true,
                animCollapse: true,
                width: 200,
                minWidth: 175,
                maxWidth: 250,
                layout: 'accordion',
                items: [{
                    layout: 'fit',
                    title: 'layout browser',
                    iconCls: 'info',
                    items: [treePanel]
                }, {
                    title: 'Navigation',
                    iconCls: 'nav'
                }, {
                    title: 'settings',
                    iconCls: 'settings',
                    html: '<p>some settings here</p>'
                }]

            },
            contentPanel, {
                region: 'east',
                id: 'detail-panel',
                title: 'Code Preview',
                split: true,
                collapsible: true,
                animCollapse: true,
                width: 200,
                autoScroll: true,
                tools: [{
                    type: 'maximize',
                    handler: function(event, toolEl, panelHeader) {
                        onMaximizeClick(event, toolEl, panelHeader);
                    }
                }]
            }
        ]
    });
});
