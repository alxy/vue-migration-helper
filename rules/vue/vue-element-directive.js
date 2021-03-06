'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /Vue\.elementDirective\(\s*?(['"`].+?['"`])/,
  warning: function (match, name) {
    return {
      reason: 'Element directives have been deprecated in favor of components',
      fix: (
        'Replace ' + chalk.red('Vue.elementDirective(' + name + ')') + ' with a component'
      ),
      docsHash: 'Vue-elementDirective-deprecated'
    }
  }
}
