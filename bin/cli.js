#!/usr/bin/env node

const ininquirer = require('inquirer')
const installModule = require('../lib/installModule')
const installSet = require('../lib/installSet')

// Questions (Inquierer.js) JSON
const initialQuestions = require('../data/questions.inital.json')
const questions = require('../data/joinedData')

// Set up a boolean to determine whether or not a command has been run.x
// Please set this to 'true' at the top of all commands so that the interactive prompt runs correctly!
let commandWasRun = false

const argv = require('yargs') // eslint-disable-line no-unused-vars

  // TODO: Does not currently work – allWorkshoppers.includes is not a function
  .command('install <workshopper..>', 'Install specific workshoppers', () => {}, (argv) => { // Install a specific workshopper
    commandWasRun = true
    argv.workshopper.forEach((module) => {
      if (questions.all.choices.includes(module)) {
        installModule(module)
      }
    })
  })
  .command('core', 'Install the core set of workshoppers', () => {}, () => { // Install the core set of workshoppers
    commandWasRun = true

    installSet('core')
  })
  .alias('core', 'main')
  .command('electives', 'Install the elective workshoppers', () => {}, () => { // Install the elective workshoppers
    commandWasRun = true

    installSet('electives')
  })
  .argv

if (commandWasRun === false) {
  ininquirer
    .prompt([questions.initial])
    .then(answers => {
      if (answers.initial === Object.keys(initialQuestions)[0]) {
        installSet('core')
      }
      if (answers.initial === Object.keys(initialQuestions)[1]) {
        installSet('electives')
      }
      if (answers.initial === Object.keys(initialQuestions)[2]) {
        ininquirer
          .prompt([questions.all])
          .then(answers => {
            installModule(answers.allInstall)
          })
      }
    })
}
