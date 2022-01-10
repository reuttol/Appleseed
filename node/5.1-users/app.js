// const yargs = require('yargs')
// const users = require('./users.js')
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import {createUser, removeUser, listUsers, readUser, updateUser} from './users.js'
const yarg = yargs(hideBin(process.argv))


yarg.command({
    command: 'add',
    describe: 'create a new user',
    builder: {
        name: {
            describe: 'User Name',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'User Email',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log("hello");
        createUser(argv.name, argv.email)
    }
})

//remove
yarg.command({
    command: 'remove',
    describe: 'Remove a user',
    builder: {
        id: {
            describe: 'User ID',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        removeUser(argv.id)
    }
})

//list
yarg.command({
    command: 'list',
    describe: 'List Users',
    handler() {
        listUsers()
    }
})

//read 
yarg.command({
    command: 'read',
    describe: 'Read a user',
    builder: {
        id: {
            describe: 'User ID',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        readUser(argv.id)
    }
})

//update 
yarg.command({
    command: 'update',
    describe: 'update a user',
    builder: {
        id: {
            describe: 'User ID',
            demandOption: true,
            type: 'string'
        },
        name: {
            describe: 'User Name',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'User Email',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        updateUser(argv.id,argv.name,argv.email)
    }
})

yarg.parse()