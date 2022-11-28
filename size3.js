const readline = require('readline');

const readInterface = readline.createInterface({input: process.stdin,output: process.stdout});

readInterface.question('Input size :', (size) => {
    readInterface.close();

    const n = parseInt(size);

    for(let i = 0; i < n; i++) {
        let line = '';
        for(let j = 0; j < n ; j++) {
            line += ((i+j) >= n - 1) ? '*' : '';
        }
        console.log(line);
    }
    readInterface.close();
});