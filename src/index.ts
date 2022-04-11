#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import { program } from 'commander';
import { entropyToWords } from './utils';

const lowerCase = /[a-z]/g;
const upperCase = /[A-Z]/g;
const digits = /[0-9]/g;

async function run() {
  console.log(
    chalk.green(figlet.textSync('entropy', { horizontalLayout: 'full' }))
  );

  program
    .version('0.0.1')
    .description('Calculate password entropy')
    .argument('<password>', 'Password string')
    .parse(process.argv);

  // Processing begins
  const [password] = program.args;

  let poolSize = 0;

  const passLength = password.length;
  const lowerCaseCount = password.match(lowerCase)?.length ?? 0;
  const upperCaseCount = password.match(upperCase)?.length ?? 0;
  const digitsCount = password.match(digits)?.length ?? 0;
  const countedCharacters = lowerCaseCount + upperCaseCount + digitsCount;
  const specialCount = passLength - countedCharacters;

  if (lowerCaseCount > 0) {
    poolSize += 26;
  }

  if (upperCaseCount > 0) {
    poolSize += 26;
  }

  if (digitsCount > 0) {
    poolSize += 10;
  }

  if (specialCount > 0) {
    poolSize += 32;
  }

  console.table({
    password,
    lowerCaseCount,
    upperCaseCount,
    digitsCount,
    specialCount,
    poolSize
  });

  const entropy = passLength * Math.log2(poolSize);

  console.log(`Entropy: `, entropy.toPrecision(4), ` bits`);
  console.log(`Your password is `, entropyToWords(entropy));
}

run();
