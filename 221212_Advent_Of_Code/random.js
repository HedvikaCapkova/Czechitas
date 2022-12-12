import fs from 'fs';

const lines = fs.readFileSync('random.txt', 'utf-8').split('\n').map(Number);

for(const line of lines){
}
// JS for of = hezci verze forEach cyklu

let sum = 0;
let max = -Infinity;

for (let i = 0; i < lines.length; i++) {
    const num = lines[i];
    sum += num;
    if (num > max){
        max = num;
    }
}

console.log(sum, max);
