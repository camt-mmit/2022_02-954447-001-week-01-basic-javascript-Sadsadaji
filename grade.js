const readline = require('readline');

const readInterface = readline.createInterface({input: process.stdin,output: process.stdout});

readInterface.question('Input score :', (score) => {
    readInterface.close();

    score = parseFloat(score);

    if (score < 0 || score > 100) {
        console.log('Input score');
        return;    
    }

    if (score >= 80) {
        console.log('your grade is A');
    } else if (score >= 70) {
        console.log('your grade is B');
    } else if (score >= 60) {
        console.log('your grade is C');
    } else if (score >= 50) {
        console.log('Your grade is D');
    } else {
        console.log('Your grade is F');
    }
});