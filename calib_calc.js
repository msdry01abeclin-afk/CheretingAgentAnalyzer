//const fs = require('fs');
//const path = require('path');
const readlineSync = require('readline-sync');

const Normal1 = parseFloat(readlineSync.question('1回目(mV)：'));
const Normal2 = parseFloat(readlineSync.question('2回目(mV)：'));

const sum = Normal1 + Normal2
const avg = sum / 2;

const lg = str => console.log(str ?? '');

lg();
lg('平均： ');
lg(` ${Normal1} + ${Normal2} = ${sum}`);
lg(` ${sum} ÷ 2 = ${avg.toFixed(1)}mV`);
lg();
lg(`シーケンサの設定値`);
lg(`    ・・・ ${Math.round(1000000/avg)}`);
lg();