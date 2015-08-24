var _ = require('lodash');
var postcss = require('postcss');

// Properties
var mapProperties = {
    'background': 'hintergrund',
    'background-color': 'hintergrund-farbe',
    'background-image': 'hintergrund-bild',
    'background-position': 'hintergrund-position',
    'background-repeat': 'hintergrund-wiederholung',
    'border': 'rahmen',
    'border-bottom': 'rahmen-unten',
    'border-bottom-color': 'rahmen-unten-farbe',
    'border-bottom-style': 'rahmen-unten-stil',
    'border-bottom-width': 'rahmen-unten-breite',
    'border-collapse': 'rahmen-kollaps',
    'border-color': 'rahmen-farbe',
    'border-left': 'rahmen-links',
    'border-left-color': 'rahmen-links-farbe',
    'border-left-stlye': 'rahmen-links-stil',
    'border-left-width': 'rahmen-links-breite',
    'border-right': 'rahmen-rechts',
    'border-right-color': 'rahmen-rechts-farbe',
    'border-right-style': 'rahmen-rechts-stil',
    'border-right-width': 'rahmen-rechts-breite',
    'border-spacing': 'rahmen-abstand',
    'border-style': 'rahmen-stil',
    'border-top': 'rahmen-oben',
    'border-top-color': 'rahmen-oben-farbe',
    'border-top-style': 'rahmen-oben-stil',
    'border-top-width': 'rahmen-oben-breite',
    'border-width': 'rahmen-breite',
    'bottom': 'unten',
    'color': 'farbe',
    'content': 'inhalt',
    'cursor': 'zeiger',
    'display': 'anzeige',
    'float': 'umlaufen',
    'font': 'schrift',
    'font-family': 'schrift-familie',
    'font-size': 'schrift-größe',
    'font-style': 'schrift-stil',
    'font-variant': 'schrift-variante',
    'font-weight': 'schrift-gewicht',
    'height': 'höhe',
    'left': 'links',
    'letter-spacing': 'zeichen-abstand',
    'line-height': 'zeilen-höhe',
    'list-style': 'listen-stil',
    'margin': 'außenabstand',
    'margin-bottom': 'außenabstand-unten',
    'margin-left': 'außenabstand-links',
    'margin-right': 'außenabstand-rechts',
    'margin-top': 'außenabstand-oben',
    'max-height': 'max-höhe',
    'max-width': 'max-breite',
    'min-height': 'min-höhe',
    'min-width': 'min-breite',
    'outline': 'kontur',
    'outline-color': 'kontur-farbe',
    'outline-style': 'kontur-stil',
    'outline-width': 'kontur-breite',
    'overflow': 'überlauf',
    'overflow-x': 'überlauf-x',
    'overflow-y': 'überlauf-y',
    'padding': 'innenabstand',
    'padding-bottom': 'innenabstand-unten',
    'padding-left': 'innenabstand-left',
    'padding-right': 'innenabstand-rechts',
    'padding-top': 'innenabstand-oben',
    'position': 'position',
    'right': 'rechts',
    'text-shadow': 'text-schatten',
    'transition': 'übergang',
    'vertical-align': 'vertikale-ausrichtung',
    'visibility': 'sichtbarkeit',
    'white-space': 'weißraum',
    'width': 'breite',
    'word-spacing': 'wort-abstand',
    'z-index': 'ebene'
};

// Values
var mapValues = {
    'absolute': 'absolut',
    'auto': 'automatisch',
    'bold': 'dick',
    'fixed': 'fixiert',
    'hidden': 'versteckt',
    'inherit': 'erben',
    'initial': 'initial',
    'italic': 'kursiv',
    'left': 'links',
    'no-repeat': 'nicht-wiederholen',
    'none': 'keines',
    'relative': 'relativ',
    'repeat': 'wiederholen',
    'repeat-x': 'wiederholen-x',
    'repeat-y': 'wiederholen-y',
    'right': 'rechts',
    'solid': 'durchgezogen',
    'static': 'statisch',
    'unset': 'aufheben',
    // Colors
    'black': 'schwarz',
    'blue': 'blau',
    'cyan': 'cyan',
    'gray': 'grau',
    'green': 'grün',
    'orange': 'orange',
    'red': 'rot',
    'white': 'weiß',
    'yellow': 'gelb'
};

module.exports = postcss.plugin('postcss-german-stylesheets', function (opts) {
    opts = opts || {};

    return function (css) {
        css.walkDecls(function transformDecl(decl) {
            // Properties
            _.forEach(mapProperties, function (key, value) {
                decl.prop = decl.prop.replace(value, key);
            });

            // Values
            _.forEach(mapValues, function (key, value) {
                decl.value = decl.value.replace(value, key);
            });

            // Important
            if (decl.value.indexOf('!wichtig') >= 0) {
                decl.value = decl.value.replace(/\s*!wichtig\s*/, '');
                decl.important = true;
            }
        });
    };
});
