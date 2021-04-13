const yargs = require('yargs')
const chalk = require('chalk')

yargs.command({
    command: 'pow',
    describe: 'Add two numbers',
    builder: {
        x: {
            type: 'integer',
            demandedOptions: true,

        }
    },
    handler: function (argv) {
        console.log(Math.pow(argv.x, argv.y));
    }
})

console.log(yargs.argv);