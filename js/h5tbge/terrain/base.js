define(["dojo/_base/declare", ], function(declare)
    {
    return declare("h5tbge.terrain.base", null, {
        name: "unnamedTerrain",
        resources: null,

        constructor: function(args)
            {
            declare.safeMixin(this, args);
            if (this.resources === null) this.resources = {};
            },

        hasResource: function(resourceName)
            {
            return this.resources[resourceName];
            }

        });
    });
