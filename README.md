# Variação no número de vagas ao longo dos meses
Uma simples aplicação web construída para avaliar a variação no número de vagas em TI e estudar Node.js.

![Acessar a aplicação](https://tijobsvariation.herokuapp.com/)

## Como funciona
O número de vagas é obtido por meio de um crawler que pesquisa por 6 linguagens (Python, Java, Javascript, C, C++ e C#) em 4 cidades do Brasil (Brasília, Belo Horizonte, São Paulo e Florianópolis). Os números de vagas disponíveis são obtidos por meio de duas fontes (LinkedIn e Catho). O crawler simplesmente pesquisa pelo nome da linguagem e anota o número de resultados.
Não há nada de especial nas linguagens nem nas cidades.

## Uso
Para utilizar a aplicação, faça um clone do repositório com `git clone https://github.com/dijsilva/jobs-variation.git`
Dentro da pasta criada, execute `yarn` ou `npm install` para instalar as depêndencias e `npm run dev` para executar utilizando o nodemon.

## Tecnologias
- Node.js - Runtime javascript
- Nunjucks - Template engine
- Axios - Requests para os sites
