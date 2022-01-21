# apiRest
apiRest with NodeJs

### Primeiro passo digitar o comando npm init para iniciar um projeto node dentro da sua pasta 

Será gerado um arquivo package.json contendo :

{
  "name": "apirest", //Nome do Projeto
  "version": "1.0.0", //Versão deste projeto
  "description": "apiRest with NodeJs", //Descrição do motivo pelo qual esse projeto está sendo criado
  "main": "index.js", 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/DougCaval/apiRest.git" //Repositório onde está no GitHub
  },
  "author": "Doug Caval", // Quem criou esse projeto 
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/DougCaval/apiRest/issues"
  },
  "homepage": "https://github.com/DougCaval/apiRest#readme"
}

### Para instalar dependências que você vai usar neste projeto 

 - npm install express 

O express fornece recursos para criar uma API de forma rápido a fácil 

 - npm install body-parser 

Responsável por criar um parser , responsável por realizar a serialização das informações que serão enviadas através das requisições da API 

 - npm install cors 

Para dar mais segurança a aplicação , quem poderá fazer a requisição nas suas APIs 

 - npm install nodemon

Ajuda a fazer o hot reload , quando salvar , automaticamente ele atualiza o projeto sem precisar parar o servidor 

 - npm instal morgan

Toda requisição que for feita dá pra ver o  log de requisição 


### by Doug Caval 
