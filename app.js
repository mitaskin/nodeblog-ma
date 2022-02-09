const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const indexPage = fs.readFileSync('index.html')

const server = http.createServer((req, res) => {

    console.log(req.url)
    res.statusCode = 200
    
    res.end(indexPage)

}
)

server.listen(port, hostname, () => { console.log(`Server Çalışıyor, http://${hostname}:${port}/`) })