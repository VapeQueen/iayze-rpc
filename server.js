///////
///////Made by Omit Gaming
//////
const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("error: 404")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("RPC ONLINE creds: omit")});
}
module.exports = keepAlive

///////
///////Made by Omit Gaming
//////