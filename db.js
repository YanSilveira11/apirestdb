/* 
Descricao: Arquivo de conexão com o BD
Aluno: Yan Silveira de Souza
Data:	30/07/2021
*/

const Sequelize = require('sequelize');

const FilmeModel = require('./models/filmes');

const sequelize = new Sequelize('CmkAIKm3os', 'CmkAIKm3os', 'Y1LgZ0hpl2', {
  host: 'remotemysql.com',
  dialect: 'mysql'
});

const Filme = FilmeModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
      console.log('Tabelas sincronizadas')
    })

    module.exports = {
      Filme
    }