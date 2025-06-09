const express = require('express');
const app = express();
const db = require('./DB/connection');

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O express está rodando na porta ${PORT}`);
});

//dbConnection
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso");
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar", err)
    })


//routes
app.get('/', (req, res) => {
    res.send("Está funcionando o site certinho?");
});