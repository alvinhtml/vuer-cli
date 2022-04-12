import program from 'commander'
import inquirer from 'inquirer'
import kleur from 'kleur'
import clone from 'git-clone'
import shell from 'shelljs'
import {
  Listr
} from 'listr2'
// import {
//   Observable
// } from 'rxjs'

const {
  execSync
} = require('child_process')
const path = require('path')

class Vuer {
  constructor() {

  }

  create(project) {
    console.log(kleur.cyan('Vuer CLI 1.0.0'))

    inquirer
      .prompt([{
        type: 'list',
        name: 'preset',
        message: 'Please pick a preset:',
        choices: ['Vue 3.x + vuero + vuex', 'Vue 3.x + vuero + pinia', 'Manually select features'],
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
        const pwd = shell.pwd()
        const branch = answers.preset === 'vue 3.x + vuero + vuex' ? 'vue3-vuero-vuex' : 'vue3-vuero-pinia'

        console.log(JSON.stringify({
          answers: answers,
          pwd: pwd,
          project: project
        }, null, '  '))

        const tasks = new Listr(
          [{
            title: 'Creating project',
            task: async (_, task) => {
              return task.newListr([{
                title: 'Copying files...',
                task: async (_, task) => {
                  await new Promise((resolve, reject) => {
                    clone(`https://github.com/alvinhtml/vuer-cli.git`, `${pwd}/${project}`, {
                      checkout: branch
                    }, function () {
                      task.title = 'Completed'
                      resolve()
                    })
                  })
                }
              }, {
                title: 'Initializing project...',
                task: async (_, task) => {
                  await new Promise((resolve, reject) => {
                    shell.rm('-rf', pwd + `/${project}/.git`)
                    task.title = 'Completed'
                    resolve()
                  })
                }
              }])
            }
          }, {
            title: 'Install dependencies. This might take a while...',
            task: async (ctx, task) => {
              await new Promise((resolve, reject) => {
                shell.exec(`npm install --prefix ./${project}`, () => {
                  resolve()
                  task.title = 'Install dependencies.'
                })
              })
            }
          }], {
            concurrent: false
          }
        )

        try {
          tasks.run()
        } catch (e) {
          console.error(e)
        }
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
