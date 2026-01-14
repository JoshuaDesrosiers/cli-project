
const ConsoleTrix = {
    line:'=================================================================================',
    error:function(...args){
        console.log(`\x1b[31m${this.line}\n\n ${args.join(' ')}\n\n${this.line}\x1b[0m\n`)
        },
    log:function(...args){console.log(`\x1b[45m${args.join(' ')}\x1b[0m`)},
    focus:function(...args){
        console.log(`\x1b[90m${this.line}\n\n ${args.join(' ')}\n\n${this.line}\x1b[0m\n`)
    },
    status:function(...args){
        console.log(`\x1b[32m${this.line}\n\n ${args.join(' ')}\n\n${this.line}\x1b[0m\n`)
    }
    }
module.exports={ConsoleTrix}