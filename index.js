const http = require('http')
const url = require('url')
const port = 8001;//5000 //8000 //8080
const users = [{
    id: 1,
    name: 'dima'
},
{
    id: 2,
    name: 'yossi'
}
]
const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true).query;
    if (req.method === 'GET') {
        if (req.url === '/users') {
            res.write(JSON.stringify(users));
        } else if (req.url.includes('users')) {
            res.write(JSON.stringify(users.filter(u => u.id == q.id)))
        }
    }
    res.end()
})

server.listen(port, () => {
    console.log("server run at port", port);
})