import *as readline from 'readline';

const rl = readline .createInterface(process.stdin, process.stdout) ;

rl.question('Input your name:' , (name)=> {
    console.log(`Hello ${name}.`);
    rl.close();
});
