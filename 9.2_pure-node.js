const http = require('http');
const url = require('url');
const fs = require('fs');
const PORT = process.env.PORT || 5000;
const user = require('./user.json');
const userDB = user.data;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('./index.html', null, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('File not found!');
            } else {
                res.write(data);
            }
            res.end();
        })
    } else if (req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(userDB));
        res.end();
    }
})


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));