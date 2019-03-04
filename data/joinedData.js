// Questions (Inquierer.js) JSON
const initialQuestions = require('../data/questions.inital.json')

// Workshopper JSON
const coreWorkshopperrs = require('../data/workshoppers.core.json')
const electiveWorkshoppers = require('../data/workshoppers.electives.json')

const allWorkshoppers = {}

Object.assign(allWorkshoppers, coreWorkshopperrs, electiveWorkshoppers) // Add coreWorkshopperrs and electiveWorkshoppers to allWorkshoppers

// Coerce keys from workshoppers Objects into Arrays
const coreKeys = Object.keys(coreWorkshopperrs)
const electiveKeys = Object.keys(electiveWorkshoppers)
const allKeys = Object.keys(allWorkshoppers)

const questions = {
  'initial': {
    'type': 'list',
    'name': 'initial',
    'message': 'What kind of workshooper would you like to install?',
    'choices': Object.keys(initialQuestions)
  },
  'core': {
    'type': 'list',
    'name': 'coreInstall',
    'message': 'Which NodeSchool core workshopper would you like to install?',
    'choices': coreKeys
  },
  'elective': {
    'type': 'list',
    'name': 'electiveInstall',
    'message': 'Which NodeSchool core workshopper would you like to install?',
    'choices': electiveKeys
  },
  'all': {
    'type': 'list',
    'name': 'allInstall',
    'message': 'Which NodeSchool workshopper would you like to install?',
    'choices': allKeys
  }
}

module.exports = questions
