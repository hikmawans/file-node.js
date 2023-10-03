const fs = require('fs');
 
const data = fs.readFileSync('todo.txt',  'UTF-8');
console.log(data.toString());

/* CONTOH 2
Sebagai alternatif,
Anda juga bisa gunakan method versi synchronous fs.readFileSync().*/