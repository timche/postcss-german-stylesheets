import postcss from 'postcss'
import properties from './properties'
import values from './values'

export default postcss.plugin('postcss-german-stylesheets', (opts) => {
  opts = opts || {}

  return (css) => {
    css.walkDecls((decl) => {
      /**
       * Convert Properties
       */
      Object.keys(properties).forEach((property) => {
        if (decl.prop === properties[property]) {
          decl.prop = property
        }
      })

      /**
       * Convert Values
       */
      Object.keys(values).some((value) => {
        const newVal = decl.value.replace(values[value], value)
        const isReplaced = decl.value !== newVal
        decl.value = newVal
        return isReplaced
      })

      /**
       * Convert "!wichtig"
       */
      if (decl.value.indexOf('!wichtig') >= 0) {
        decl.value = decl.value.replace(/\s*!wichtig\s*/, '')
        decl.important = true
      }
    })
  }
})
