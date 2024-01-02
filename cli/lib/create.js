#!/usr/bin/env node

import yargs from 'yargs';
import inquirer from 'inquirer';
import { hideBin } from "yargs/helpers";

const g_argv = yargs(hideBin(process.argv))
  .options({
    'project_location': {
      type: 'string',
      alias: 'l',
      describe: 'The location where the project will be created',
      demandOption: false,
      default: '.',
    },
    'project_location': {
      type: 'string',
      alias: 'l',
      describe: 'The location where the project will be created',
      demandOption: false,
      default: '.',
    },
  })
  .argv;

function preConfigs(argv) {
    console.log(argv)
    const nomeDoProjeto = argv['project-name'];
    console.log(`Creating project ${nomeDoProjeto}...`);

    inquirer.prompt([
        {
        type: 'input',
        name: 'project_location',
        message: 'Where would you like to create this project?',
        default: argv.project_location,
        },
        {
        type: 'input',
        name: 'project_location',
        message: 'Where would you like to create this project?',
        default: argv.project_location,
        },
    ]).then((answers) => {
        console.log(answers.project_location);
    }).catch((err) => {
        console.log(err);
    });
}

preConfigs(g_argv);