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

describe('postcss-german-stylesheets', function () {

    // Properties
    it('converts farbe to color', function (done) {
        test('a{ farbe: white; }', 'a{ color: white; }', {}, done);
    });

    // Values
    it('converts grau to gray', function (done) {
        test('a{ color: grau; }', 'a{ color: gray; }', {}, done);
    });

});
