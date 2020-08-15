var ws = require('nodejs-websocket')
const Connection = require('nodejs-websocket/Connection')

console.log('开始建立连接')
let user1 = '',user2 = '',user1Ready = false,user2Ready = false
var server = ws.createServer(function(conn) {
    console.log('New connection')
    conn.on('text', function(str) {
        broadcast(server,str)
    })
    conn.on('close', function(code, reason) {
        console.log('Connection closed')
    })
    conn.on('error', function(code, reason) {
        console.log('error closed')
    })
}).listen(8001)
console.log('websocket建立完毕')

function broadcast(server, str) {
    server.connections.forEach(function (conn) {
        conn.sendText(str);
    })
}