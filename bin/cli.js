#!/usr/bin/env node
const process = require('process');
const { version } = require('../package.json');
const logger = require('./utils/logger');

/**
 * CompactJs CLI
 */
class Cli {
  constructor() {
    this.version = version;
    this.commands = `
      compact [command]

      Commands:
        compact migrate [filename]             Run a migrations
        compact migrate:all                    Run all pending migration
        compact migrate:undo [filename]        Reverts a migration
        compact migrate:undo:all               Revert all migrations ran
        compact seed [filename]                Run specified seeder
        compact seed:undo                      Deletes data from the database
        compact seed:all                       Run every seeder
        compact seed:undo:all                  Deletes data from the database
        compact db:create                      Create database specified by configuration
        compact db:drop                        Drop database specified by configuration
        compact init                           Initializes project
        compact create:migration [name]        Generates a new migration file 
        compact create:model [name]            Generates a new model file
        compact create:seed [name]             Generates a new seed file     

      Options:
        help     Show help                                                       
        version  Show version number
    `;
  }

  run() {
    const { argv } = process;

    switch (argv[2]) {
      case 'help':
        logger(this.commands);
        break;
      case 'version':
        logger(this.version);
        break;
      case 'migrate':
        logger('coming soon');
        break;
      default:
        logger(this.commands);
    }
  }
}

const initCli = new Cli();
initCli.run();
