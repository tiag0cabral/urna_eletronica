import path = require("path");
import fs = require("fs");
import express = require("express");
import cors = require("cors");


const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const porta = 3001
app.listen(porta, async function () {
    console.log(`Server rodando na porta ${porta}`);
});

app.get("/tipoDeVotacao", async function (request, response) {
    let resposta = await lerArquivo("config", ".csv", ",", "");
    response.send(resposta);
});

app.post("/voto", async function (request, response) {
    let rg: string = request.body.rg;
    let nome: string = request.body.nome;
    let numeroCandidato: number = request.body.numeroCandidato;
    /* A variável data será implementada posteriormente caso sobre tempo hábil. */
    let data: Date = new Date();
    let voto = `${rg},${nome},${numeroCandidato},${data}\r\n`;
    let resposta = await guardarRegistro("votos", ".csv", voto);
    response.send(resposta);
})

async function guardarRegistro(arquivo: string, extensao: string, voto: any, endereco?: string) {
    if (endereco == undefined) endereco = "";
    return new Promise(function (resolve, reject) {
        fs.appendFile(endereco + arquivo + extensao, voto, function (err) {
            if (err) {
                reject({
                    "status": "500",
                    "mensagem": `Erro ao guardar registro no arquivo ${arquivo}: ${err}`
                });

            } else {
                resolve({
                    "status": "200",
                    "mensagem": `Registrado com sucesso no arquivo ${arquivo}`
                })
            }
        })
    })
}

async function lerArquivo(arquivo: string, extensao: string, separador: string, endereco?: string) {
    if (endereco == undefined) endereco = "";
    return new Promise(function (resolve, reject) {
        fs.readFile(endereco + arquivo + extensao, "utf-8", function (err, data) {
            if (err) {
                reject("Erro ao ler arquivo: " + arquivo + extensao + " " + err);
            } else {
                let vetorInicial: Array<any> = data.split("\r\n");
                let vetorFormatado: Array<any> = [];
                vetorInicial.forEach(element => {
                    vetorFormatado.push(element.split(separador));
                });
                resolve(vetorFormatado);
            }
        })
    })
}