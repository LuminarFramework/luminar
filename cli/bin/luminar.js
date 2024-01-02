#!/usr/bin/env node

import yargs from 'yargs';
import fs from 'fs';
import path from 'path';

import { hideBin } from "yargs/helpers";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const logoPath = path.join(__dirname, '..', 'assets', 'logo.art');
const logo = fs.readFileSync(logoPath, 'utf8')

console.log(logo);
yargs(hideBin(process.argv))
  .options({
    'project_location': {
      type: 'string',
      alias: 'l',
      describe: 'The location where the project will be created',
      demandOption: false,
      default: '.',
    },
  })
  .command({
    command: 'create <project-name>',
    describe: 'Create a new Luminar project',
    handler: async (argv) => {
      import('../lib/create.js').then((module) => {
        module.preConfigs(argv);
      });
    },
  })
  .help()
  .argv;