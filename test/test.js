var _ = require('lodash');
var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

function propertyTest(german, english, value) {
    it('converts ' + german + ' to ' + english, function (done) {
        test(
            'a{ ' + german + ': ' + value + '; }',
            'a{ ' + english + ': ' + value + '; }',
            {},
            done
        );
    });
}

function valueTest(german, english, property) {
    it('converts ' + german + ' to ' + english, function (done) {
        test(
            'a{ ' + property + ': ' + german + '; }',
            'a{ ' + property + ': ' + english + '; }',
            {},
            done
        );
    });
}

describe('postcss-german-stylesheets', function () {
    // Test Properties
    _.forEach(plugin.mapProperties, function (value, key) {
        propertyTest(value, key, '10px');
    });

    // Test Values
    _.forEach(plugin.mapValues, function (value, key) {
        valueTest(value, key, 'color');
    });

    // Test important
    it('converts !wichtig to !important', function (done) {
        test('a{ color: white !wichtig; }', 'a{ color: white !important; }', {}, done);
    });
});
