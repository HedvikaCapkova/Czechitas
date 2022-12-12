import fs from 'fs';

// fs = knihovna v node.js - staci importovat a nemusi se instalovat
// '\n' = konec radku => nacteni do pole

const lines = fs.readFileSync('input.txt', 'utf-8').split('\n');

// lines.forEach((line) => {

// })

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    console.log(i, line);
}

