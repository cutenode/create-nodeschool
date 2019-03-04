const ininquirer = require('inquirer')
const installModule = require('./installModule')
const questions = require('../data/joinedData')

const installSet = (setName) => {
  if (setName === 'core') {
    ininquirer
      .prompt([questions.core])
      .then(answers => {
        installModule(answers.coreInstall)
      })
  } else if (setName === 'electives') {
    ininquirer
      .prompt([questions.elective])
      .then(answers => {
        installModule(answers.electiveInstall)
      })
  } else if (setName === 'all') {
    ininquirer
      .prompt([questions.all])
      .then(answers => {
        installModule(answers.allInstall)
      })
  } else {
    console.log('err... something\'s wrong!')
  }
}

module.exports = installSet
