// web/ klasörünü Capacitor'ın okuduğu www/ klasörüne kopyalar.
const fs = require('fs');
const path = require('path');
const from = path.join(__dirname, '..', 'web');
const to = path.join(__dirname, '..', 'www');
fs.rmSync(to, { recursive: true, force: true });
fs.cpSync(from, to, { recursive: true });
console.log('web/ -> www/ kopyalandı');
