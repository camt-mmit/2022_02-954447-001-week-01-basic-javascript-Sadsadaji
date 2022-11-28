const readline = require('readline');

const readInterface = readline.createInterface({input: process.stdin,output: process.stdout});

readInterface.question('Input size :', (size) => {
    const n = parseInt(size);
    const fn = 2*n - 1;

    for(let j = 0;j < fn; j++) {
        let line = '';
        for(let i = 0; i < fn ; i++) {
            line += (
                (fn == 1) ||
                (i + j + n - 1) % (fn - 1) == 0 ||
                (i - j + n - 1) % (fn - 1) == 0
            ) ? '*' : ' ';
        }
        console.log(line);
    }
    readInterface.close();
});