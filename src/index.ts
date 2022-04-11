#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import { program } from 'commander';

async function run() {
  console.log(
    chalk.green(figlet.textSync('entropy', { horizontalLayout: 'full' }))
  );

  program
    .version('0.0.1')
    .description('Calculate password entropy')
    .argument('password', 'Password string')
    .parse(process.argv);

  // some thing
}

run();
