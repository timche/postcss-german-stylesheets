/* eslint-disable no-console */
import fs from 'fs'
import properties from '../src/properties'
import values from '../src/values'

/**
 * Docs Folder
 */
const DOCS_PATH = './docs'

if (!fs.existsSync(DOCS_PATH)) {
  fs.mkdirSync(DOCS_PATH)
}

/**
 * Properties
 */
const PROPERTIES_PATH = `${DOCS_PATH}/Properties.md`
let propertiesDocContent = '# Properties\n| English | German |\n| ------ | ------ |'

Object.keys(properties).forEach(property => (
  propertiesDocContent += `\n| \` ${property} \` | \`${properties[property]}\` |`
))

fs.writeFile(PROPERTIES_PATH, propertiesDocContent, error => {
  if (error) {
    console.error(error)
  }
})

/**
 * Values
 */
const VALUES_PATH = `${DOCS_PATH}/Values.md`
let valuesDocContent = '# Values\n| English | German |\n| ------ | ------ |'

Object.keys(values).forEach(value => (
  valuesDocContent += `\n| \` ${value} \` | \`${values[value]}\` |`
))

fs.writeFile(VALUES_PATH, valuesDocContent, error => {
  if (error) {
    console.error(error)
  }
  console.log('Docs generated.')
})

/**
 * Copy README
 */
fs.createReadStream('README.md').pipe(fs.createWriteStream(`${DOCS_PATH}/README.md`))
