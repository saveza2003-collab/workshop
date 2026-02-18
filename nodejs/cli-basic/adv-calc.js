#!/usr/bin/env node
import yargs from "yargs";
import { hideBin    } from "yargs/helpers"; 
const cli   = yargs(process.argv.slice(2));

cli.command(
    "sum <a> <b>",'sum of two numbers',{
        a:{
            type:"number",
            demandOption:true,
        },
        b:{
            type:"number",
            demandOption:true,
        },
    },
    (argv)=>{
        console.log(argv.a + argv.b);
    })
    cli.parse();