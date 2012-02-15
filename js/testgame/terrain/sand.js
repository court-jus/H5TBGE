define(["dojo/_base/declare", "h5tbge/terrain/base", ], function(declare, terrainBase)
    {
    return declare("testgame.terrain.sand", [terrainBase], {
        name: "sand",

        constructor: function(args)
            {
            this.inherited(arguments);
            this.resources = {
                sand: {
                    quantity: 100000,
                    renewal: 1,
                    difficulty: 1,
                    },
                petrol: {
                    quantity: 1000,
                    renewal: 1,
                    difficulty: 10,
                    },
                };
            },

        });
    });
