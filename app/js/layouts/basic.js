function getBasicLayout() {

    /**
     * [nav card布局中导航]
     * @param  {[type]} incr [description]
     * @return {[type]}       [description]
     */
    function nav(incr) {
        var l = Ext.getCmp('card-wizard-panel').getLayout();
        var i = l.activeItem.id.split('-')[1];
        var next = parseInt(i, 10) + incr;

        l.setActiveItem(next);

        Ext.getCmp('card-prev').setDisabled(next === 0);
        Ext.getCmp('card-next').setDisabled(next === 2);
    }

    return {
        /**
         * ================absolutec Layout config================
         */
        absolute: {
            title: 'Absolute Layout',
            id: 'absolute-panel',
            layout: 'absolute',
            defaults: {
                xtype: 'panel',
                frame: true,
                width: 500,
                height: 200
            },
            items: [{
                title: 'Panel 1',
                x: 50,
                y: 50
            }, {
                title: 'Panel 2',
                x: 250,
                y: 250
            }]
        },
        /**
         * ================border Layout config================
         */
        border: {
            title: 'border layout',
            id: 'border-panel',
            layout: 'border',
            width: 500,
            height: 300,
            items: [{
                title: 'west panel',
                width: 200,
                xtype: 'panel',
                region: 'west',
                split: true,
                layout: 'fit',
                collapsible: true
            }, {
                title: 'center panel',
                xtype: 'panel',
                region: 'center',
                split: true,
                layout: 'fit'
            }, {
                title: 'south panel',
                xtype: 'panel',
                height: 100,
                region: 'south',
                split: true,
                layout: 'fit'
            }]
        },
        /**
         * ================accordion Layout config================
         */
        accordion: {
            title: 'accordion layout',
            id: 'accordion-panel',
            layout: 'accordion',
            items: [{
                title: 'Introduction',
                tools: [{
                    type: 'refresh',
                    handler: function(event, toolEl, owner, handler) {
                        Ext.Msg.alert('message', 'handler is called!');
                    }
                }, {
                    type: 'gear'
                }],
                html: '<p>Here is some accordion content.  Click on one of the other bars below for more.</p>',
            }, {
                title: 'Basic Content',
                tools: [{
                    type: 'help',
                    tooltip: 'Get help',
                    callBack: function(panel, tool, event) {

                    }
                }],
                items: [{
                    xtype: 'button',
                    text: 'show Next Panel',
                    handler: function() {
                        Ext.getCmp('custome-panel').expand();
                    }
                }, {
                    xtype: 'panel',
                    border: false,
                    html: 'more content.Open the third panel for a customized look and feel example.'
                }]
            }, {
                title: 'Custome Panel , look and feel',
                id: 'custome-panel',
                cls: 'custom-accordion',
                html: '<p>Here is an example of how easy it is to completely customize the look and feel of an individual panel simply by adding a CSS class in the config.</p>'
            }]
        },

        /**
         * ================anchor Layout config================
         */
        anchor: {
            title: 'anchor layout',
            id: 'anchor-panel',
            layout: 'anchor',
            defaults: {
                xtype: 'panel',
                margin: '5 5',
                ui: 'light',
                frame: true
            },
            autoScroll: true,
            items: [{
                title: 'panel 1',
                height: 100,
                anchor: '50%',
                html: '<p>Width 50% of the Container</p>'
            }, {
                title: 'panel 2',
                height: 100,
                anchor: '-100',
                html: '<p>container width -100 px</p>'
            }, {
                title: 'panel 2',
                height: 100,
                anchor: '-10 -350',
                html: '<p>Width = container width -10px</p><p>Height = container hegth -300px</p>'
            }]
        },

        /**
         * ================cardTab Layout config================
         */
        'card-tabs': {
            title: 'cardTab layout',
            id: 'card-tabs-panel',
            xtype: 'tabpanel',
            items: [{
                title: 'panel 1',
                html: 'this is conten in panel 1'
            }, {
                title: 'panel 2',
                html: 'this is conten in panel 2'
            }, {
                title: 'panel 3',
                html: 'this is conten in panel 3'
            }]
        },

        /**
         * ================cardTab Layout config================
         */
        'card-wizard': {
            title: 'cardWizard layout',
            id: 'card-wizard-panel',
            layout: 'card',
            activeItem: 0,
            bodyStyle: 'padding:15px',
            defaults: {
                xtype: 'panel',
                border: false
            },
            bbar: ['->', {
                id: 'card-prev',
                text: '<< Previous',
                disabled: true,
                handler: Ext.Function.bind(nav, this, [-1])
            }, {
                id: 'card-next',
                text: 'Next >>',
                disabled: false,
                handler: Ext.Function.bind(nav, this, [1])

            }],
            items: [{
                id: 'card-0',
                html: '<h1>Welcome to the Demo Wizard!</h1><p>Step 1 of 3</p><p>Please click the "Next" button to continue...</p>'
            }, {
                id: 'card-1',
                html: '<p>Step 2 of 3</p><p>Almost there.  Please click the "Next" button to continue...</p>'
            }, {
                id: 'card-2',
                html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
            }]
        },

        /**
         * ================column Layout config================
         */
        column : {
        	title : 'column Layout',
        	id : 'column-panel',
        	layout : 'column',
        	defaults : {
        		border : true,
        		bodyStyle : 'padding:15px'
        	},
        	items : [{
        		columnWidth : 0.33,
        		title : 'Width=33%',
        		html : 'the width of this panel is 33% of the container'
        	},{
        		columnWidth : 0.5,
        		title : 'Width=50%',
        		html : 'the width of this panel is 33% of the container'
        	}]
        },

        /*
         * ================  FitLayout config  =======================
         */
        fit: {
            id: 'fit-panel',
            title: 'Fit Layout',
            layout: 'fit',
            items: {
                title: 'Inner Panel',
                html: '<p>This panel is fit within its container.</p>',
                bodyStyle: 'padding:15px',
                ui: Ext.themeName == 'neptune' ? 'light' : 'default',
                border: false
            }
        },


        /*
         * ================  TableLayout config  =======================
         */
        table : {
            id: 'table-panel',
            title: 'Table Layout',
            layout: {
                type: 'table',
                columns: 4
            },
            defaults: {
                bodyStyle:'padding:15px 20px',
                border: true
            },
            items: [{
                title: 'Lots of Spanning',
                html: '<p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p>',
                rowspan: 3
            },{
                title: 'Basic Table Cell',
                html: '<p>Basic panel in a table cell.</p>',
                cellId: 'basic-cell',
                cellCls: 'custom-cls'
            },{
                html: '<p>Plain panel</p>'
            },{
                title: 'Another Cell',
                html: '<p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p>',
                width: 300,
                rowspan: 2
            },{
                html: 'Plain cell spanning two columns',
                colspan: 2
            },{
                title: 'More Column Spanning',
                html: '<p>Spanning three columns.</p>',
                colspan: 3
            },{
                title: 'Spanning All Columns',
                html: '<p>Spanning all columns.</p>',
                colspan: 4
            }]
        }
    };
}