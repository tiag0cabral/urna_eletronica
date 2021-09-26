# Projeto Final - Urna Eletrônica
## _Bem-vindo(a) ao nosso projeto final com Node da ProWay!_ 

~~~javascript
console.log("Welcome to our project!");
~~~

[![Build Status](https://veja.abril.com.br/wp-content/uploads/2016/06/urna-eletronica-home-620-original11.jpeg)](https://www.tre-sc.jus.br/eleicoes/urna-eletronica)

### Este projeto tem como objetivo simular o processo de uma votação eleitoral através de uma urna. 

### Pensando não só votação presidencial ou similares, a ideia da criação desta urna eletrônica foi abordar qualquer outro tipo de votação, como por exemplo, alguma candidatura para síndico de condomínio, ou até mesmo para uma simples votação entre um grupo de amigos.

\
&nbsp;

## Tecnologias utilizadas

Com o intuito de desenvolver uma aplicação WEB, utilizamos as seguintes tecnologias para compor o sistema:

| Tecnologias | Tutoriais |
| :------: | :------: |
| HTML | [Aprenda mais sobre HTML aqui!][HtML] |
| CSS | [Aprenda mais sobre CSS aqui!][CsS] |
| TypeScript | [Aprenda mais TypeScript aqui!][TyPeScRiPt] |
| Boostrap 5 | [Aprenda mais sobre Bootstrap aqui!][BoOtS] |
| Angular | [Aprenda mais sobre Angular aqui!][AnG] |
| Node | [Aprenda mais sobre Node aqui!][NoDe] |
| Express | [Aprenda mais sobre Express aqui!][ExPr] |
| JSON Web Tokens | [Aprenda mais sobre JWT aqui!][JwT] |

Caso tenha dificuldades em entender alguma(s) da(s) tecnologia(s) apresentadas acima, sugerimos que você acesse os links da tabela para um maior entendimento.  

\
&nbsp;

## 🔵 O que já foi desenvolvido até o momento? 

- Tela da urna eletrônica *funcional* para votação dos candidatos registrados; ✔️
- Tela de login *funcional* para acesso aos dados da apuração da votação; ✔️
- Tela da apuração *funcional* que exibe o resultado da votação (apenas disponível com autenticação de usuário). ✔️

\
&nbsp;

##  🔵 Como instalar os projetos localmente

1. Primeiramente, escolha um diretório de preferência do seu computador e abra o CMD na pasta escolhida. Em seguida, faça o clone do projeto:

```sh
git clone https://bitbucket.org/proway-turma-b-grupo-5/urna_eletronica.git
```

2. Recomendamos a instalação da versão _14_ ou superior do [Node.js](https://nodejs.org/) para prosseguir com os próximos passos sem problemas.

3. Também é necessário a instalação do [Angular CLI](https://angular.io/cli) após a instalação do _Node.js_ através do comando:

```sh
npm install -g @angular/cli
```

\
&nbsp;

> 🔸 `Configurando o projeto Back-End:`

4. Acesse a pasta do projeto back-end:

```sh
cd ..\urna_eletronica\urnaEletronicaBackEnd\
```

5. Instale as dependências do projeto: 

```sh
npm i
```

6. Execute o seguinte comando para compilar o arquivo _TypeScript_ do server e gerar o _JavaScript_ do mesmo:

```sh
npm run compile server.ts
```

7. Para executar o servidor, basta executar o próximo comando:

```sh
node server.js
```

\
&nbsp;

> 🔸 `Configurando o projeto Front-End:`



8. Acesse a pasta do projeto front-end:

```sh
cd ..\urna_eletronica\urnaEletronicaFrontEnd\
```


9. Instale as dependências do projeto:

```sh
npm i
```

10. Para executar o projeto, basta digitar o seguinte comando:

```sh
ng serve -o
```

**Pronto! Tudo feito. Tenha uma boa votação!** 😃 

\
&nbsp;

## 🔵 Agradecimentos

Agradecemos primeiramente a [Capgemini][CaPgEmInI] pela oportunidade e confiança para que nós pudéssemos crescer ao longo do curso. Agradecemos também a toda equipe da [ProWay][PrOwAy] pelo excelente suporte e recepção desde o começo do curso. Especialmente ao nosso facilitador [Ivan J. Borchardt][IvAn] por todos os seus ensinamentos, dedicação e esforços.

\
&nbsp;

## 🔵 Sobre nós

### Nossa equipe é formada por:

* [Juan Ribeiro Silva Pereira][JuAn]

* [Natan do Santos Borges][NaTaN]

* [Thiago Vinícius de Almeida Souza][ThIaGo]

* [Tiago Cabral de Faria][TiAgo]
\
&nbsp;

##### `esperamos que gostem do resultado!`
\
&nbsp;

> #️⃣GetTheFutureYouWant 
>> #️⃣LifeAtCapgemini 
>>> #️⃣ProudToBeCapgemini

\
&nbsp;

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://bitbucket.org/proway-turma-b-grupo-5/urna_eletronica/jira?statuses=new&statuses=indeterminate&sort=-updated&page=1)

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [HtML]: <https://www.w3schools.com/html/>
   [CsS]: <https://www.w3schools.com/css/>
   [BoOtS]: <https://getbootstrap.com/docs/5.0/getting-started/introduction/>
   [TyPeScRiPt]: <https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html>
   [AnG]: <https://angular.io/guide/what-is-angular>
   [NoDe]: <https://nodejs.org/en/docs/guides/>
   [ExPr]: <https://expressjs.com/pt-br/starter/installing.html>
   [JwT]: <https://jwt.io/introduction>
   [CaPgEmInI]: <https://www.capgemini.com/br-pt/>
   [PrOwAy]: <https://www.proway.com.br/?gclid=Cj0KCQjwkbuKBhDRARIsAALysV4uRayoInqxHU1Byn3v1mIz2H5Jp_fPspPDTkNji0IChU4p92brlGAaAiaBEALw_wcB>
   [IvAn]: <https://www.linkedin.com/in/ivan-borchardt/>
   [JuAn]: <https://www.linkedin.com/in/juan-ribeiro-557659120/>
   [NaTaN]: <https://www.linkedin.com/in/natansborges/>
   [ThIaGo]: <https://www.linkedin.com/in/tvasouza/>
   [TiAgo]: <https://www.linkedin.com/in/tiago-cabral-de-faria-518033158/>