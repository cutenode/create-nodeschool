#!/usr/bin/env node

const ininquirer = require('inquirer')
const installModule = require('../lib/install-module')

// Workshopper JSON
const coreWorkshopperrs = require('../data/workshoppers.core.json')
const electiveWorkshoppers = require('../data/workshoppers.electives.json')

const allWorkshoppers = coreWorkshopperrs.concat(electiveWorkshoppers)

// Questions (Inquierer.js) JSON
const initialQuestions = require('../data/questions.inital.json')

// Set up a boolean to determine whether or not a command has been run.
// Please set this to 'true' at the top of all commands so that the interactive prompt runs correctly!
let commandWasRun = false

const argv = require('yargs')
  .command('install <workshopper..>', 'Install specific workshoppers', () => {}, (argv) => { // Install a specific workshopper
    commandWasRun = true
    argv.workshopper.forEach((module) => {
      if (allWorkshoppers.includes(module)) {
        installModule(module)
      }
    })
  })
  .command('core', 'Install the core set of workshoppers', () => {}, () => { // Install the core set of workshoppers
    commandWasRun = true

    installSet('core')
  })
  .command('electives', 'Install the elective workshoppers', () => {}, () => { // Install the elective workshoppers
    commandWasRun = true

    installSet('electives')
  })
  .argv

const questions = {
  'initial': {
    'type': 'list',
    'name': 'initial',
    'message': 'What would you like to do?',
    'choices': initialQuestions
  },
  'install': {
    'type': 'list',
    'name': 'install',
    'message': 'Which NodeSchool workshopper would you like to install?',
    'choices': allWorkshoppers
  }
}

if (commandWasRun === false) {
  ininquirer
    .prompt([questions.initial])
    .then(answers => {
      if (answers.initial === initialQuestions[0]) { // Install core modules
        installSet('core')
      }
      if (answers.initial === initialQuestions[1]) {
        installSet('electives')
      }
      if (answers.initial === initialQuestions[2]) {
        ininquirer
          .prompt([questions.install])
          .then(answers => {
            installModule(answers.install)
          })
      }
    })
}

const installSet = (setName) => {
  if (setName === 'core') {
    coreWorkshopperrs.forEach(module => {
      installModule(module)
    })
  } else if (setName === 'electives') {
    electiveWorkshoppers.forEach(module => {
      installModule(module)
    })
  } else if (setName === 'all') {
    allWorkshoppers.forEach(module => {
      installModule(module)
    })
  } else {
    console.log('err... something\'s wrong!')
  }
}
