const http = require('http')
const url = require('url')
const port = 8001;//5000 //8000 //8080
const users = require('./express_capsule/user.json')
const data = users.data




const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true).query;
    if (req.method === 'GET') {
        if (req.url === '/users') {
            res.write(JSON.stringify(data));
        } else if (req.url.includes('users')) {
            if (q.id)
                res.write(JSON.stringify(data.filter(u => u.id == q.id)))
            else if (q.capsule)
                res.write(JSON.stringify(data.filter(u => u.capsule == q.capsule)))
        }
    }
    res.end()
})

server.listen(port, () => {
    console.log("server run at port", port);
})