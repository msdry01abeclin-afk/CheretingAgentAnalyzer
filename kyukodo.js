//const fs = require('fs');
//const path = require('path');
const readlineSync = require('readline-sync');

const transmittance = a => (10**(-a) *100).toFixed(2);

while (true){
    console.log(
        `  透過率・・・${transmittance(parseFloat(readlineSync.question('吸光度：')))}%\n`
    );
}