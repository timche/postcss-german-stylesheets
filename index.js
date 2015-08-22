var postcss = require('postcss');

module.exports = postcss.plugin('postcss-german-stylesheets', function (opts) {
    opts = opts || {};

    return function (css) {
        css.eachDecl(function transformDecl(decl) {
            // Properties
            decl.prop  = decl.prop.replace('farbe', 'color');
            // Values
            decl.value = decl.value.replace('grau', 'gray');

            if (decl.value.indexOf('!wichtig') >= 0) {
                decl.value = decl.value.replace(/\s*!wichtig\s*/, '');
                decl.important = true;
            }
        });
    };
});
