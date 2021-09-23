"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs");
var express = require("express");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
var porta = 3001;
app.listen(porta, function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("Server rodando na porta " + porta);
            return [2 /*return*/];
        });
    });
});
app.get("/candidatos", function (request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var candidatos, candidatosFormatado, i, informacoesCandidato;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (lerArquivo("candidatos", ".csv", ",", ""))];
                case 1:
                    candidatos = _a.sent();
                    candidatosFormatado = [];
                    for (i = 0; i < candidatos.length; i++) {
                        informacoesCandidato = {
                            numero: (Number(candidatos[i][0])),
                            nome: (candidatos[i][1]),
                            urlImagem: (candidatos[i][2])
                        };
                        candidatosFormatado.push(informacoesCandidato);
                    }
                    console.log("\n\t\tRegistros passados pela requisi\u00E7\u00E3o do endpoint \"/candidatos\":");
                    console.table(candidatosFormatado);
                    response.send(candidatosFormatado);
                    return [2 /*return*/];
            }
        });
    });
});
app.get("/votoIndefinido", function (request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var indefinidos, indefinidosFormatado, imgsIndefinidas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (lerArquivo("votoIndefinido", ".csv", ",", ""))];
                case 1:
                    indefinidos = _a.sent();
                    indefinidosFormatado = [];
                    imgsIndefinidas = {
                        urlImgCandNaoIdentificado: (indefinidos[0][0]),
                        urlImgVotoBranco: (indefinidos[1][0]),
                        urlImgVotoNulo: (indefinidos[2][0])
                    };
                    indefinidosFormatado.push(imgsIndefinidas);
                    console.log("\n\t\t\t\t\t\t\t\t\tRegistros passados pela requisi\u00E7\u00E3o do endpoint \"/votoIndefinido\":");
                    console.table(indefinidosFormatado);
                    response.send(indefinidosFormatado);
                    return [2 /*return*/];
            }
        });
    });
});
app.get("/tipoDeVotacao", function (request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var tipoVotacao, tipoVotacaoFormatado, tipo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, lerArquivo("config", ".csv", ",", "")];
                case 1:
                    tipoVotacao = _a.sent();
                    tipoVotacaoFormatado = [];
                    tipo = {
                        tipoVotacao: (tipoVotacao[0][0])
                    };
                    tipoVotacaoFormatado.push(tipo);
                    console.log("\nRegistros passados pela requisi\u00E7\u00E3o do endpoint \"/tipoDeVotacao\":");
                    console.table(tipoVotacaoFormatado);
                    response.send(tipoVotacaoFormatado);
                    return [2 /*return*/];
            }
        });
    });
});
app.get("/apuracao", verifica, function (request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var candidatos, apuracao, votos, apuracaoFormatado, i, informacoesCandidatoApuracao;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (lerArquivo("candidatos", ".csv", ",", ""))];
                case 1:
                    candidatos = _a.sent();
                    return [4 /*yield*/, (inicializarVetorApuracao(candidatos))];
                case 2:
                    apuracao = _a.sent();
                    return [4 /*yield*/, (lerArquivo("votos", ".csv", ",", ""))];
                case 3:
                    votos = _a.sent();
                    apuracao = obterSomatorioVotos(apuracao, votos);
                    ordenarCandidatosMaisVotados(apuracao);
                    apuracaoFormatado = [];
                    for (i = 0; i < apuracao.length; i++) {
                        informacoesCandidatoApuracao = {
                            numero: (apuracao[i][0]),
                            nome: (apuracao[i][1]),
                            urlImagem: (apuracao[i][2]),
                            votos: (apuracao[i][3])
                        };
                        apuracaoFormatado.push(informacoesCandidatoApuracao);
                    }
                    console.log("\n\t\t\tRegistros passados pela requisi\u00E7\u00E3o do endpoint \"/apuracao\":");
                    console.table(apuracaoFormatado);
                    response.send(apuracaoFormatado);
                    return [2 /*return*/];
            }
        });
    });
});
app.post("/voto", function (request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var rg, nome, numeroCandidato, data, voto, resposta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rg = request.body.rg;
                    nome = request.body.nome;
                    numeroCandidato = request.body.numeroCandidato;
                    data = new Date();
                    voto = rg + "," + nome + "," + numeroCandidato + "," + data + "\r\n";
                    return [4 /*yield*/, guardarRegistro("votos", ".csv", voto)];
                case 1:
                    resposta = _a.sent();
                    response.send(resposta);
                    return [2 /*return*/];
            }
        });
    });
});
var SECRET = "SohEuSei";
app.post("/login", function (request, reponse) {
    return __awaiter(this, void 0, void 0, function () {
        var login, password, listaUsuarios, index, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    login = request.body.email;
                    password = request.body.password;
                    return [4 /*yield*/, (lerArquivo("usuarios", ".csv", ","))];
                case 1:
                    listaUsuarios = _a.sent();
                    for (index = 0; index < listaUsuarios.length; index++) {
                        if (login == listaUsuarios[index][0] && password == listaUsuarios[index][1]) {
                            console.log(login + ", esta logado no sistema!");
                            token = jwt.sign({ loginEsperado: login }, SECRET, { expiresIn: 300 });
                            return [2 /*return*/, reponse.json({ auth: true, token: token })];
                        }
                    }
                    return [2 /*return*/, reponse.json({ auth: false, message: "Usuario não autorizado" })];
            }
        });
    });
});
function verifica(request, response, next) {
    var token = request.header("x-access-token");
    jwt.verify(token, SECRET, function (err, decoded) {
        if (err) {
            return response.status(401).end();
        }
        next();
    });
}
function guardarRegistro(arquivo, extensao, voto, endereco) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (endereco == undefined)
                endereco = "";
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    fs.appendFile(endereco + arquivo + extensao, voto, function (err) {
                        if (err) {
                            reject({
                                "status": "500",
                                "mensagem": "Erro ao guardar registro no arquivo " + arquivo + ": " + err
                            });
                        }
                        else {
                            resolve({
                                "status": "200",
                                "mensagem": "Registrado com sucesso no arquivo " + arquivo
                            });
                        }
                    });
                })];
        });
    });
}
function lerArquivo(arquivo, extensao, separador, endereco) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (endereco == undefined)
                endereco = "";
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    fs.readFile(endereco + arquivo + extensao, "utf-8", function (err, data) {
                        if (err) {
                            reject("Erro ao ler arquivo: " + arquivo + extensao + " " + err);
                        }
                        else {
                            var vetorInicial = data.split("\r\n");
                            var vetorFormatado_1 = [];
                            vetorInicial.forEach(function (element) {
                                vetorFormatado_1.push(element.split(separador));
                            });
                            resolve(vetorFormatado_1);
                        }
                    });
                })];
        });
    });
}
function inicializarVetorApuracao(candidatos) {
    return __awaiter(this, void 0, void 0, function () {
        var resultadosEleicao, imgsIndefinidas, imagemNulo, imagemBranco, votosNulo, votosBranco, i, informacoesCandidato;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    resultadosEleicao = [];
                    return [4 /*yield*/, (lerArquivo("votoIndefinido", ".csv", ",", ""))];
                case 1:
                    imgsIndefinidas = _a.sent();
                    imagemNulo = imgsIndefinidas[2][0];
                    imagemBranco = imgsIndefinidas[1][0];
                    votosNulo = ["NULO", "-----", imagemNulo, 0];
                    votosBranco = ["BRANCO", "-----", imagemBranco, 0];
                    resultadosEleicao.push(votosNulo);
                    resultadosEleicao.push(votosBranco);
                    for (i = 0; i < candidatos.length; i++) {
                        informacoesCandidato = [];
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
                    return [2 /*return*/, resultadosEleicao];
            }
        });
    });
}
/**
 * @description Esta função é responsabilizada por realizar o somatório de votos da urna eletrônica.
 * @param {*} resultadosEleicao Este parâmetro deve conter a matriz dos candidatos registrados no sistema, a opção de "voto nulo" e "voto em branco" inicializados com "0" votos.
 * @param {*} votos Este parâmetro deve conter a matriz de votos registrados no sistema.
 * @returns Retona a matriz da apuração da urna eletrônica com os votos devidamente contabilizados.
 */
function obterSomatorioVotos(resultadosEleicao, votos) {
    var rgContabilizados = [];
    for (var i = 0; i < votos.length; i++) {
        var rgAtual = votos[i][0];
        // Verificação dos votos do tipo "não anônimo" (com RG preenchido).
        if (rgAtual != undefined && rgAtual != "") {
            if (!rgContabilizados.includes(rgAtual)) {
                rgContabilizados.push(rgAtual);
            }
            else {
                continue;
            }
        }
        //FIXME: Verificar possibilidade de alteração do tipo da variável  "numeroVoto".
        var numeroVoto = votos[i][2];
        switch (numeroVoto) {
            case "N-U-L-O":
                resultadosEleicao[0][3]++;
                break;
            case "B-R-A-N-C-O":
                resultadosEleicao[1][3]++;
                break;
            default:
                for (var j = 0; j < resultadosEleicao.length; j++) {
                    var numeroCandidato = (resultadosEleicao[j][0]);
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
function ordenarCandidatosMaisVotados(resultadosEleicao) {
    resultadosEleicao.sort(function (x, y) {
        //Ordena pela quantidade de votos (maior -> menor)
        if (x[3] > y[3]) {
            return -1;
        }
        else if (x[3] < y[3]) {
            return 1;
        }
        else {
            //Ordena em ordem alfabética (A -> Z)
            if (x[1] < y[1]) {
                return -1;
            }
            else if (x[1] > y[1]) {
                return 1;
            }
            else {
                return 0;
            }
        }
    });
}
