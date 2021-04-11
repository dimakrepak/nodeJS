const fs = require('fs')
const files = fs.readdirSync('./')

// fs.writeFileSync('new.txt', 'This file was created by Node.js')
// fs.copyFileSync('new.txt','copy.txt')
// fs.renameSync('new.txt', 'rename.txt')
// fs.mkdirSync('./newFolder')
// for (const file of files) {
//     console.log(file)
//   }
console.log(files);

