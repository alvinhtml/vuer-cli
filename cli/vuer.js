import program from 'commander'
import inquirer from 'inquirer'
import kleur from 'kleur'
// import Listr from 'listr'
const {
  execSync
} = require('child_process')
const path = require('path')

class Vuer {
  constructor() {
    this.dir = '/data'
  }

  create(name) {


    console.log(kleur.cyan('Vuer CLI 1.0.0'))
    console.log(name)

    inquirer
      .prompt([{
        type: 'list',
        name: 'preset',
        message: 'Please pick a preset:',
        choices: ['Vue 3.x', 'Vue 3.x + vuero + TypeScript', 'Manually select features'],
        filter(val) {
          return val.toLowerCase();
        }
      }, {
        type: 'checkbox',
        message: 'Select toppings:',
        name: 'toppings',
        choices: [{
          name: 'TypeScript'
        }, {
          name: 'ESLint',
        }, {
          name: 'Cypress',
        }, {
          name: 'Vuero Components',
        }],
        validate(answer) {
          if (answer.length < 1) {
            return 'You must choose at least one topping.'
          }

          return true
        }
      }])
      .then((answers) => {
        console.log(JSON.stringify(answers, null, '  '))
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      })
  }

  config(option) {
    conlose.log(`Configuring ${option}`);
  }
}

const vuer = new Vuer()

program
  .version('1.0.0', '-v, --version', '显示版本')
  .description('vuer cli, create vuero project')

program
  .command('create <name>')
  .description('create vuero project')
  .action((args, p) => {

    console.clear()

    if (args) {
      vuer.create(args, p)
    }
  })

program
  .command('config <option>')
  .description('modify configuration')
  .action((args) => {
    vuer.config(args)
  })

program
  .parse(process.argv)
