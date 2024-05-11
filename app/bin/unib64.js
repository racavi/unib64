#!/usr/bin/env node

// Copyright (c) Rafa Calvo
// SPDX-License-Identifier: MIT

import { Command } from 'commander';

import * as encoder from '../encoder.js'
import * as decoder from '../decoder.js'

const program = new Command();

program
  .description('unib64 - Converts Unicode text to Base64 string and viceversa');

program.command('encode')
  .description('Encodes an Unicode string as a Base64 string')
  .argument('<string>', 'Unicode string')
  .action((str) => {
    console.log(encoder.encode(str));
  });

program.command('decode')
  .description('Decodes a Base64 string as an Unicode string')
  .argument('<string>', 'Base64 string')
  .action((str) => {
    console.log(decoder.decode(str));
  });

program.parse();
