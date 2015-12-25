function getBasicLayout() {
    return {
    	/**
         * ================absolute Layout config================
         */
        absolute: {
            title: 'Absolute Layout',
            id: 'absolute-panel',
            layout: 'absolute',
            defaults: {
                xtype: 'panel',
                width: 200,
                height: 50
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
        }
    }
}
