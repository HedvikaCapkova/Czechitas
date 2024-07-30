import fs from 'fs';

const lines = fs.readFileSync('skupiny.txt', 'utf-8').split('\n');

const groups = [];
let group = [];

for (const line of lines){
    if (line === '') {
        groups.push(group);
        group = [];
    } else {
        group.push(line);
    }
}

 console.log(groups);