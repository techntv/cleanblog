'use strict';

var HandlebarsLayouts = require('handlebars-layouts');
var Helpers = require('handlebars-helpers');
var moment = require('moment');

module.exports = function (Handlebars) {
    Handlebars.registerHelper(HandlebarsLayouts(Handlebars));
    ['array', 'code', 'collection', 'comparison', 'date', 'fs', 'html', 'i18n', 'inflection', 'logging', 'markdown', 'match', 'math', 'misc', 'number', 'path', 'string', 'url'].forEach(function(name) {
        Helpers[name]({
        handlebars: Handlebars
        });
    });

    // dang ky rivetData helper block cho handlebars ở đây

    // rivetData helper, bat buoc key trong meta data cua content phai la 'rivetData'
    Handlebars.registerHelper('rivetData', obj => {
        if (obj.data.root.rivetData)
            return JSON.stringify(obj.data.root.rivetData);
        else
            return '{}';
    });

    Handlebars.registerHelper('json', function (obj) {
        return JSON.stringify(obj);
    });

    Handlebars.registerHelper('removeIndex', function (url) {
        return url.replace('index.html', '');
    });

    Handlebars.registerHelper('formatDate', function (context, options) {
        var format = options.hash.format || "YYYY-MM-DD";

        if (context === "now") {
            context = new Date();
        }

        return moment(context).format(format);
    });
};

