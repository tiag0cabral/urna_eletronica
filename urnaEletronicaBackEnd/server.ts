import path = require("path");
import fs = require("fs");
import express = require("express");
import cors = require("cors");
import * as jwt from "jsonwebtoken"


const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const porta = 3001
app.listen(porta, async function () {
    console.log(`Server rodando na porta ${porta}`);
});

app.get("/candidatos", async function (request, response) {
    let candidatos: Array<any> = await (lerArquivo("candidatos", ".csv", ",", "")) as Array<any>;
    
    let candidatosFormatado: Array<any> = [];
    for (let i = 0; i < candidatos.length; i++) {
        let informacoesCandidato: object = {
            numero: (Number(candidatos[i][0])) as number,
            nome: (candidatos[i][1]) as string,
            urlImagem: (candidatos[i][2]) as string
        }
        candidatosFormatado.push(informacoesCandidato);
    }

    console.log(`\n\t\tRegistros passados pela requisição do endpoint "/candidatos":`);
    console.table(candidatosFormatado);

    response.send(candidatosFormatado);
})

app.get("/votoIndefinido", async function (request, response) {
    let indefinidos = await (lerArquivo("votoIndefinido", ".csv", ",", "")) as Array<any>;
    
    let indefinidosFormatado: Array<any> = [];
   
        let imgsIndefinidas: object = {
            urlImgCandNaoIdentificado: (indefinidos[0][0]) as string,
            urlImgVotoBranco: (indefinidos[1][0]) as string,
            urlImgVotoNulo: (indefinidos[2][0]) as string
        }
        
    indefinidosFormatado.push(imgsIndefinidas);

    console.log(`\n\t\t\t\t\t\t\t\t\tRegistros passados pela requisição do endpoint "/votoIndefinido":`);
    console.table(indefinidosFormatado);
    
    response.send(indefinidosFormatado);
})

app.get("/tipoDeVotacao", async function (request, response) {
    let tipoVotacao = await lerArquivo("config", ".csv", ",", "");

    let tipoVotacaoFormatado: Array<any> = [];
    let tipo: object = {
        tipoVotacao: (tipoVotacao[0][0]) as string
    }
    tipoVotacaoFormatado.push(tipo);

    console.log(`\nRegistros passados pela requisição do endpoint "/tipoDeVotacao":`);
    console.table(tipoVotacaoFormatado);

    response.send(tipoVotacaoFormatado);
});

app.get("/apuracao",verifica,async function(request, response) {
   
    let candidatos = await (lerArquivo("candidatos", ".csv", ",", "")) as Array<any>;
    let apuracao: Array<any> = await (inicializarVetorApuracao(candidatos)) as Array<any>;
    let votos = await (lerArquivo("votos", ".csv", ",", "")) as Array<any>;

    apuracao = obterSomatorioVotos(apuracao, votos);
    
    ordenarCandidatosMaisVotados(apuracao);
    
    let apuracaoFormatado: Array<any> = [];
    for (let i = 0; i < apuracao.length; i++) {
        let informacoesCandidatoApuracao: object = {
            numero: (apuracao[i][0]) as number|string,
            nome: (apuracao[i][1]) as string,
            urlImagem: (apuracao[i][2]) as string,
            votos: (apuracao[i][3]) as number
        }
        apuracaoFormatado.push(informacoesCandidatoApuracao);
    }

    console.log(`\n\t\t\tRegistros passados pela requisição do endpoint "/apuracao":`);
    console.table(apuracaoFormatado);

    response.send(apuracaoFormatado);
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
const SECRET = "SohEuSei"
app.post("/login", async function (request,reponse) {
    let  login: string = request.body.email;
    let  password: string = request.body.password;

     let listaUsuarios: string[] =   await (lerArquivo("usuarios",".csv",",")) as string[];

     for (let index = 0; index < listaUsuarios.length; index++) {
         if (login == listaUsuarios[index][0] && password == listaUsuarios[index][1] ) {
            console.log(`${login}, esta logado no sistema!` );
            const token = jwt.sign({loginEsperado: login},SECRET,{expiresIn: 300})
            return reponse.json({auth: true, token});
         }
     }
     return reponse.json({auth: false, message:"Usuario não autorizado"});
   

})

function verifica(request, response, next) {
    const token = request.header("x-access-token")
    jwt.verify(token, SECRET, function (err, decoded) {
        if (err) {
            return response.status(401).end()
        }
        next()
    })
}

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

async function inicializarVetorApuracao(candidatos: any) {
    let resultadosEleicao: Array<any> = [];
   
    let imgsIndefinidas: Array<any> = await (lerArquivo("votoIndefinido", ".csv", ",", "")) as Array<any>;

    let imagemNulo: string = imgsIndefinidas[2][0];
    let imagemBranco: string = imgsIndefinidas[1][0];     

    let votosNulo: Array<any>  = ["NULO", "-----", imagemNulo, 0];
    let votosBranco: Array<any> = ["BRANCO", "-----", imagemBranco, 0];

    resultadosEleicao.push(votosNulo);
    resultadosEleicao.push(votosBranco);

    for (let i = 0; i < candidatos.length; i++) {
        let informacoesCandidato: Array<any> = [];

        //Número do candidato
        informacoesCandidato.push(candidatos[i][0]);
        //Nome do candidato
        informacoesCandidato.push(candidatos[i][1]);
        //URL da foto do candidato
        informacoesCandidato.push(candidatos[i][2]);
        // Quantidade de votos
        informacoesCandidato.push(0);

        resultadosEleicao.push(informacoesCandidato);

    }

    return resultadosEleicao;
}

/**
 * @description Esta função é responsabilizada por realizar o somatório de votos da urna eletrônica.
 * @param {*} resultadosEleicao Este parâmetro deve conter a matriz dos candidatos registrados no sistema, a opção de "voto nulo" e "voto em branco" inicializados com "0" votos.
 * @param {*} votos Este parâmetro deve conter a matriz de votos registrados no sistema.
 * @returns Retona a matriz da apuração da urna eletrônica com os votos devidamente contabilizados.
 */
 function obterSomatorioVotos(resultadosEleicao: Array<any>, votos: Array<any>) {

    let rgContabilizados: Array<any> = [];

    for (let i = 0; i < votos.length; i++) {

        let rgAtual: string = votos[i][0];

        // Verificação dos votos do tipo "não anônimo" (com RG preenchido).
        if (rgAtual != undefined && rgAtual != "") {
            if (!rgContabilizados.includes(rgAtual)) {
                rgContabilizados.push(rgAtual);
            } else {
                continue;
            }
        }

        //FIXME: Verificar possibilidade de alteração do tipo da variável  "numeroVoto".
        let numeroVoto: string = votos[i][2];
        switch (numeroVoto) {
            case "N-U-L-O":
                resultadosEleicao[0][3]++;
                break;
            case "B-R-A-N-C-O":
                resultadosEleicao[1][3]++;
                break;
            default:
                for (let j = 0; j < resultadosEleicao.length; j++) {
                    let numeroCandidato: string = (resultadosEleicao[j][0]) as string;
                    if (numeroCandidato == numeroVoto) {
                        resultadosEleicao[j][3]++;
                        break;
                    }
                }
        }
    }
    return resultadosEleicao;
}

/**
 * @description Ordena os candidatos mais votados de forma decrescente. Caso haja candidatos com a mesma quantidade de votos, os mesmos serão ordenados em ordem alfabética pelo nome.
 * @param {*} resultadosEleicao Este parâmetro deve conter a matriz da apuração da urna com os votos já contabilizados.
 */
 function ordenarCandidatosMaisVotados(resultadosEleicao: Array<any>) {
    resultadosEleicao.sort(function (x, y) {
        //Ordena pela quantidade de votos (maior -> menor)
        if (x[3] > y[3]) {
            return -1
        } else if (x[3] < y[3]) {
            return 1
        } else {
            //Ordena em ordem alfabética (A -> Z)
            if (x[1] < y[1]) {
                return -1;
            } else if (x[1] > y[1]) {
                return 1;
            } else {
                return 0;
            }
        }
    });
}

