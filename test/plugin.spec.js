import postcss from 'postcss'
import expect from 'expect'
import plugin from '../src'
import properties from '../src/properties'
import values from '../src/values'

function run(input, output, opts, done) {
  return postcss([plugin(opts)])
    .process(input)
    .then((result) => {
      expect(result.css).toEqual(output)
      expect(result.warnings().length).toEqual(0)
      done()
    }).catch((error) => {
      done(error)
    })
}

function propertyTest(german, english, value = 'german') {
  it(`converts ${german} to ${english}`, (done) => {
    run(
      `a{ ${german}: ${value}; }`,
      `a{ ${english}: ${value}; }`,
      {},
      done
    )
  })
}

function valueTest(german, english, property = 'german') {
  it(`converts ${german} to ${english}`, (done) => {
    run(
      `a{ ${property}: ${german}; }`,
      `a{ ${property}: ${english}; }`,
      {},
      done
    )
  })
}

describe('postcss-german-stylesheets', () => {
  // Test Properties
  Object.keys(properties).forEach((property) => propertyTest(properties[property], property))

  // Test Values
  Object.keys(values).forEach((value) => valueTest(values[value], value))

  // Test important
  it('converts !wichtig to !important', (done) => {
    run(
      'a{ color: white !wichtig; }',
      'a{ color: white !important; }',
      {},
      done
    )
  })

  // Test Brackets
  it('converts verschieben(12px, 50%) to translate(12px, 50%)', (done) => {
    run(
      'a{ umformung: verschieben(12px, 50%); }',
      'a{ transform: translate(12px, 50%); }',
      {},
      done
    )
  })
})
