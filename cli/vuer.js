import program from 'commander'
import inquirer from 'inquirer'
import kleur from 'kleur'
import clone from 'git-clone'
import shelljs from 'shelljs'
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
        const pwd = shelljs.pwd()

        // const tasks = new Listr([{
        //     title: 'Creating project',
        //     task: () => {
        //       return new Listr([{
        //           title: 'Pull code from git repository...',
        //           task: () => {
        //             return new Promise((resolve, reject) => {
        //               // clone(`https://github.com/alvinhtml/vuer-cli.git`, `${pwd}/${project}`, {
        //               //   checkout: 'template-repository'
        //               // }, function () {
        //               //   resolve()
        //               // })
        //               resolve()
        //             })
        //           }
        //         },
        //         {
        //           title: 'Initializing git repository...',
        //           task: () => {
        //             shell.rm('-rf', pwd + `/${project}/.git`)
        //           }
        //         }
        //       ])
        //     }
        //   },
        //   {
        //     title: 'Initialize configuration',
        //     task: () => {
        //       setTimeout(() => {
        //         Promise.resolve()
        //       }, 1000)
        //     }
        //   },
        //   {
        //     title: 'Install dependencies',
        //     task: () => {
        //       return new Listr([{
        //         title: 'Installing npm dependencies. This might take a while...',
        //         task: (ctx, task) => {
        //           return new Promise((resolve, reject) => {
        //             // shell.exec('npm install', () => {
        //             //   resolve()
        //             // })
        //             setTimeout(() => {
        //               resolve()
        //               task.title = 'Completed'
        //             }, 3000)
        //           })
        //         }
        //       }])
        //     }
        //   }
        // ])

        const tasks = new Listr(
          [{
            title: 'Creating project',
            task: async (ctx, task) => {
              return task.newListr([{
                title: 'Pull code from git repository...',
                task: async (ctx, task) => {
                  await new Promise((resolve, reject) => {
                    // clone(`https://github.com/alvinhtml/vuer-cli.git`, `${pwd}/${project}`, {
                    //   checkout: 'template-repository'
                    // }, function () {
                    //   resolve()
                    // })
                    setTimeout(() => {
                      resolve()
                      task.title = 'Completed!'
                    }, 3000)
                  })
                }
              }, {
                title: 'Initializing git repository...',
                task: async () => {
                  // shell.rm('-rf', pwd + `/${project}/.git`)
                  await new Promise((resolve, reject) => {
                    setTimeout(() => {
                      resolve()
                      task.title = 'Git repository initialized.'
                    }, 3000)
                  })
                }
              }])
            }
          }, {
            title: 'Install dependencies',
            task: async (ctx, task) => {
              return task.newListr([{
                title: 'Installing npm dependencies. This might take a while...',
                task: async (ctx, task) => {
                  await new Promise((resolve, reject) => {
                    // shell.exec('npm install', () => {
                    //   resolve()
                    // })
                    setTimeout(() => {
                      resolve()
                      task.title = 'Completed!'
                    }, 3000)
                  })
                }
              }])
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
