const readline = require('readline');

const readInterface = readline.createInterface({input: process.stdin,output: process.stdout});

readInterface.question('Input size :', (size) => {
    readInterface.close();

    const n = parseInt(size);

    for(let j = 0; j < n; j++) {
        let line = '';
        for(let i = 0; i < n ; i++) {
            line += (j >= i) ? '*' : '';
        }
        console.log(line);
    }
    readInterface.close();
});