const fs = require('node:fs');

const contents = fs.readFileSync('notes.txt', 'utf-8');

fs.writeFileSync('copy.txt', 'I want to write this', 'utf-8')