const express = require("express");
const app = express();

const saudacao = require("./saudacaoMid");

app.use(saudacao("Guilherme"));

app.use("/index", (require, response, next) => {
    console.log('Será que serei chamado ?')
    next()
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
