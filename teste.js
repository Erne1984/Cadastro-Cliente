const express = require("express");
const app = express();

app.get("/", function(req, resp){
    resp.send("Bem vindo 🤴🤛🧔🎻🎸 ")
}) 

app.get("/contato", function(req,resp){
    resp.send("página do contato do meu app 🛡🔪⚔🗡🖱")
})

app.get("/produto", function(req,resp){
    resp.send("página do produto do meu app 🤢🤢🤢🤔🤔😆")
})

app.get("/dados/:nome/:cargo", function(req, resp){
    resp.send
})

//esta sempre deva ser a ultima linha quando usamos o express 
app.listen(8081, function(){
    console.log("Servidor está funcionando na url http://localhost:8081")
}) 