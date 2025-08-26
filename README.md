# Job Finder
Projeto desenvolvido como parte do curso ["JavaScript do Básico ao Avançado" (Udemy)](https://www.udemy.com/course/javascript-do-basico-ao-avancado-com-node-e-projetos/learn/lecture/18336304#overview).
O objetivo é criar uma aplicação web para cadastro e visualização de vagas de emprego, praticando conceitos de Node.js, Express, Handlebars e SQL.

## 🚀 Funcionalidades
- Cadastrar vagas de emprego (título, descrição, salário, empresa, email, etc.)
- Listar vagas disponíveis
- Visualizar detalhes de uma vaga específica
- Buscar vagas por palavra-chave

## 🛠 Tecnologias Utilizadas
- Node.js
- Express
- Sequelize (ORM para banco de dados)
- MySQL
- Handlebars (template engine)
- Bootstrap / CSS

## 📂 Estrutura do Projeto
```
Job_Finder/
├── app.js           # Arquivo principal
├── db/              # Configurações de conexão com o banco
├── models/          # Modelos Sequelize
├── routes/          # Rotas da aplicação
├── views/           # Templates Handlebars
├── public/          # Arquivos estáticos (CSS, imagens, etc.)
└── package.json
```

## ▶️ Como Executar

1. Clone o repositório
git clone https://github.com/EduardaDepetris/Job_Finder.git
cd Job_Finder

2. Instale as dependências
npm install

3. Configure o banco de dados no arquivo db/connection.js

4. Inicie o servidor
npm start

5. Acesse no navegador
http://localhost:3000


## 📚 Sobre o Projeto

Este projeto foi desenvolvido apenas para fins educacionais, acompanhando as aulas do curso.
Não é um produto final, mas um exercício para praticar:

- Estruturação de aplicações em Node.js
- Uso do Sequelize com MySQL
- Implementação de rotas e templates com Express e Handlebars

## 👩‍💻 Autora
- Eduarda Depetris
- [GitHub](https://github.com/EduardaDepetris)
