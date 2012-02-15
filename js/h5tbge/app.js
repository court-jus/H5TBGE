define(["dojo/_base/declare", "dojo/dom", "dojo/domReady!"], function(declare, dom)
    {
    return declare("h5tbge.app", null, {
        plop: "plaf",

        constructor: function(args)
            {
            declare.safeMixin(this, args);
            }
        });
    });
