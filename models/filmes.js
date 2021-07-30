/* 
Descricao: Arquivo de criação da tabela
Aluno: Yan Silveira de Souza
Data:	30/07/2021
*/

module.exports = (sequelize, type) => {
  return sequelize.define('filme', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: type.STRING,
    descrição: type.STRING,
    nota: type.INTEGER,
    diretor: type.STRING,
    ano: type.INTEGER
  })
}