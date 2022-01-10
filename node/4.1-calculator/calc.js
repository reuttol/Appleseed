const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Sum of two numbers',
    builder: {
        a: {
            describe: 'first number',
            demandOption: true,
            type: 'number'
        },
        b: {
            describe: 'second number',
            demandOption: true,
            type: 'number'
        },
    },
    handler: function (argv) {
        console.log(argv.a+argv.b);
    }
});
yargs.command({
    command: 'sub',
    describe: 'Subtraction between two numbers',
    builder: {
        a: {
            describe: 'first number',
            demandOption: true,
            type: 'number'
        },
        b: {
            describe: 'second number',
            demandOption: true,
            type: 'number'
        },
    },
    handler: function (argv) {
        console.log(argv.a-argv.b);
    }
});

yargs.command({
    command: 'mul',
    describe: 'multiplication of two numbers',
    builder: {
        a: {
            describe: 'first number',
            demandOption: true,
            type: 'number'
        },
        b: {
            describe: 'second number',
            demandOption: true,
            type: 'number'
        },
    },
    handler: function (argv) {
        console.log(argv.a*argv.b);
    }
});
yargs.command({
    command: 'pow',
    describe: 'Power of two',
    builder: {
        a: {
            describe: 'The number',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log(argv.a**2);
    }
});

yargs.parse();
// console.log(yargs.argv);