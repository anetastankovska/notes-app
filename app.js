const chalk = require('chalk');
//const { process_params } = require('express/lib/router');
const yargs = require('yargs');
//const add = require('./utils.js');
// const fs = require("fs");
//const getNotes = require('./notes.js');
const validator = require('validator');
const notes = require('./notes.js');
const { string, argv } = require('yargs');


//const name = 'Aneta';npm 
//console.log(add(2, 4));

// const msg = getNotes();
// console.log(msg);

// console.log(validator.isEmail('anetastankovskaane@gmail.com'));
// console.log(validator.isURL('http://google.com'));
// const log = console.log;
// log(chalk.inverse.green("Success!"));
// //console.log("Updates coming");
// log(validator.isFloat('2e3'));

// console.log(process.argv);

//Customize yargs version
yargs.version('1.1.0');

//Create add comment
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create a list command
yargs.command({
    command: 'list',
    describe: 'Listing a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: false,
            type: 'string'
        }
    },
    handler() {
        notes.listNotes()
    }
})

//Create a read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse();
//console.log(yargs.argv);
