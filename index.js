var _ = require('lodash');
var postcss = require('postcss');

module.exports = postcss.plugin('postcss-german-stylesheets', function (opts) {
    opts = opts || {};

    return function (css) {
        css.walkDecls(function transformDecl(decl) {
            // -----------------------------------------------------------------
            // Properties
            // -----------------------------------------------------------------
            decl.prop = decl.prop.replace('anzeige', 'display');
            decl.prop = decl.prop.replace('außenabstand', 'margin');
            decl.prop = decl.prop.replace('außenabstand-links', 'margin-left');
            decl.prop = decl.prop.replace('außenabstand-oben', 'margin-top');
            decl.prop = decl.prop.replace(
                'außenabstand-rechts',
                'margin-right'
            );
            decl.prop = decl.prop.replace(
                'außenabstand-unten',
                'margin-bottom'
            );
            decl.prop = decl.prop.replace('unten', 'bottom');
            decl.prop = decl.prop.replace('breite', 'width');
            decl.prop = decl.prop.replace('ebene', 'z-index');
            decl.prop = decl.prop.replace('farbe', 'color');
            decl.prop = decl.prop.replace('umlaufen', 'float');
            decl.prop = decl.prop.replace('hintergrund', 'background');
            decl.prop = decl.prop.replace(
                'hintergrund-bild',
                'background-image'
            );
            decl.prop = decl.prop.replace(
                'hintergrund-farbe',
                'background-color'
            );
            decl.prop = decl.prop.replace(
                'hintergrund-position',
                'background-position'
            );
            decl.prop = decl.prop.replace(
                'hintergrund-wiederholung',
                'background-repeat'
            );
            decl.prop = decl.prop.replace('höhe', 'height');
            decl.prop = decl.prop.replace('inhalt', 'content');
            decl.prop = decl.prop.replace('innenabstand', 'padding');
            decl.prop = decl.prop.replace('innenabstand-left', 'padding-left');
            decl.prop = decl.prop.replace('innenabstand-oben', 'padding-top');
            decl.prop = decl.prop.replace(
                'innenabstand-rechts',
                'padding-right'
            );
            decl.prop = decl.prop.replace(
                'innenabstand-unten',
                'padding-bottom');
            decl.prop = decl.prop.replace('kontur', 'outline');
            decl.prop = decl.prop.replace('kontur-breite', 'outline-width');
            decl.prop = decl.prop.replace('kontur-farbe', 'outline-color');
            decl.prop = decl.prop.replace('kontur-stil', 'outline-style');
            decl.prop = decl.prop.replace('links', 'left');
            decl.prop = decl.prop.replace('listen-stil', 'list-style');
            decl.prop = decl.prop.replace('max-breite', 'max-width');
            decl.prop = decl.prop.replace('max-höhe', 'max-height');
            decl.prop = decl.prop.replace('min-breite', 'min-width');
            decl.prop = decl.prop.replace('min-höhe', 'min-height');
            decl.prop = decl.prop.replace('oben', 'top');
            decl.prop = decl.prop.replace('position', 'position');
            decl.prop = decl.prop.replace('rahmen', 'border');
            decl.prop = decl.prop.replace('rahmen-abstand', 'border-spacing');
            decl.prop = decl.prop.replace('rahmen-breite', 'border-width');
            decl.prop = decl.prop.replace('rahmen-farbe', 'border-color');
            decl.prop = decl.prop.replace('rahmen-kollaps', 'border-collapse');
            decl.prop = decl.prop.replace('rahmen-links', 'border-left');
            decl.prop = decl.prop.replace(
                'rahmen-links-breite',
                'border-left-width'
            );
            decl.prop = decl.prop.replace(
                'rahmen-links-farbe',
                'border-left-color'
            );
            decl.prop = decl.prop.replace(
                'rahmen-links-stil',
                'border-left-stlye'
            );
            decl.prop = decl.prop.replace('rahmen-oben', 'border-top');
            decl.prop = decl.prop.replace(
                'rahmen-oben-breite',
                'border-top-width'
            );
            decl.prop = decl.prop.replace(
                'rahmen-oben-farbe',
                'border-top-color'
            );
            decl.prop = decl.prop.replace(
                'rahmen-oben-stil',
                'border-top-style'
            );
            decl.prop = decl.prop.replace(
                'rahmen-rechts-breite',
                'border-right-width'
            );
            decl.prop = decl.prop.replace(
                'rahmen-rechts-farbe',
                'border-right-color'
            );
            decl.prop = decl.prop.replace(
                'rahmen-rechts-stil',
                'border-right-style'
            );
            decl.prop = decl.prop.replace('rahmen-rechts', 'border-right');
            decl.prop = decl.prop.replace('rahmen-stil', 'border-style');
            decl.prop = decl.prop.replace('rahmen-unten', 'border-bottom');
            decl.prop = decl.prop.replace(
                'rahmen-unten-breite',
                'border-bottom-width'
            );
            decl.prop = decl.prop.replace(
                'rahmen-unten-farbe',
                'border-bottom-color'
            );
            decl.prop = decl.prop.replace(
                'rahmen-unten-stil',
                'border-bottom-style'
            );
            decl.prop = decl.prop.replace('rechts', 'right');
            decl.prop = decl.prop.replace('schrift', 'font');
            decl.prop = decl.prop.replace('schrift-familie', 'font-family');
            decl.prop = decl.prop.replace('schrift-gewicht', 'font-weight');
            decl.prop = decl.prop.replace('schrift-größe', 'font-size');
            decl.prop = decl.prop.replace('schrift-stil', 'font-style');
            decl.prop = decl.prop.replace('schrift-variante', 'font-variant');
            decl.prop = decl.prop.replace('sichtbarkeit', 'visibility');
            decl.prop = decl.prop.replace('text-ausichtung', 'text-align');
            decl.prop = decl.prop.replace('text-schatten', 'text-shadow');
            decl.prop = decl.prop.replace('übergang', 'transition');
            decl.prop = decl.prop.replace('überlauf', 'overflow');
            decl.prop = decl.prop.replace('überlauf-x', 'overflow-x');
            decl.prop = decl.prop.replace('überlauf-y', 'overflow-y');
            decl.prop = decl.prop.replace(
                'vertikale-ausrichtung',
                'vertical-align'
            );
            decl.prop = decl.prop.replace('weißraum', 'white-space');
            decl.prop = decl.prop.replace('wort-abstand', 'word-spacing');
            decl.prop = decl.prop.replace('zeichen-abstand', 'letter-spacing');
            decl.prop = decl.prop.replace('zeiger', 'cursor');
            decl.prop = decl.prop.replace('zeilen-höhe', 'line-height');

            // -----------------------------------------------------------------
            // Values
            // -----------------------------------------------------------------
            decl.value = decl.value.replace('absolut', 'absolute');
            decl.value = decl.value.replace('aufheben', 'unset');
            decl.value = decl.value.replace('automatisch', 'auto');
            decl.value = decl.value.replace('dick', 'bold');
            decl.value = decl.value.replace('durchgezogen', 'solid');
            decl.value = decl.value.replace('erben', 'inherit');
            decl.value = decl.value.replace('fixiert', 'fixed');
            decl.value = decl.value.replace('initial', 'initial');
            decl.value = decl.value.replace('keines', 'none');
            decl.value = decl.value.replace('kursiv', 'italic');
            decl.value = decl.value.replace('links', 'left');
            decl.value = decl.value.replace('nicht-wiederholen', 'no-repeat');
            decl.value = decl.value.replace('rechts', 'right');
            decl.value = decl.value.replace('relativ', 'relative');
            decl.value = decl.value.replace('statisch', 'static');
            decl.value = decl.value.replace('versteckt', 'hidden');
            decl.value = decl.value.replace('wiederholen', 'repeat');
            decl.value = decl.value.replace('wiederholen-x', 'repeat-x');
            decl.value = decl.value.replace('wiederholen-y', 'repeat-y');

            // Colors
            decl.value = decl.value.replace('blau', 'blue');
            decl.value = decl.value.replace('cyan', 'cyan');
            decl.value = decl.value.replace('gelb', 'yellow');
            decl.value = decl.value.replace('grau', 'gray');
            decl.value = decl.value.replace('grün', 'green');
            decl.value = decl.value.replace('orange', 'orange');
            decl.value = decl.value.replace('rot', 'red');
            decl.value = decl.value.replace('schwarz', 'black');
            decl.value = decl.value.replace('weiß', 'white');

            // Important
            if (decl.value.indexOf('!wichtig') >= 0) {
                decl.value = decl.value.replace(/\s*!wichtig\s*/, '');
                decl.important = true;
            }
        });
    };
});
