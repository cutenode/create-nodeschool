const { spawn } = require('child_process')

const installModule = (moduleName) => {
  spawn(`npm`, ['install', '-g', moduleName, '--color=always'], { 'stdio': 'inherit' })
}

module.exports = installModule
