const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const saudacao = require("./saudacaoMid");
const usuarioApi = require("./api/user");

app.post("/usuario", usuarioApi.salvar);
app.get("/usuario", usuarioApi.obter);


app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(saudacao("Guilherme"));

app.use("/index", (require, response, next) => {
    console.log('Será que serei chamado ?')
    next()
})

app.get('/clientes/relatorio', (require, response) => {
    response.send(`Cliente relatório: completo = ${require.query.completo} ano = ${require.query.ano}`)
})

app.post('/corpo', (require, response) => {
    // let corpo = ''
    // require.on('data', function(parte){
    //     corpo += parte
    // })

    // require.on('end', function(){
    //     response.send(corpo)
    // })
    response.send(require.body)
})

app.get('/clientes/:id', (require, response) => {
    response.send(`Cliente ${require.params.id} selecionado!`)
})


app.get("/index", (require, response, next) => {
    console.log("Resposta sendo enviada!!!");
  response.json({
    data: [
      { id: 7, name: "Ana", position: 1 },
      { id: 34, name: "Bia", position: 2 },
      { id: 73, name: "Carlos", position: 3 },
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200,
  });

    next()
});

app.use("/index", (require, response) => {
    console.log('Sim fui chamado agora!!')
})

app.listen(8080, () => {
  console.log("backend funcionando!!");
});
