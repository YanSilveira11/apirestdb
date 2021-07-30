/* 
Descricao: Arquivo de verbos HTTP para testar as requisições da API
Aluno: Yan Silveira de Souza
Data:	30/07/2021
*/

const router = require('express').Router();

const { Filme } = require('../../db');

router.get('/', async(req, res) => {
  const filmes = await Filme.findAll();
  res.json(filmes);
});

router.post('/', async (req, res) => {
  const filme = await Filme.create(req.body);
  res.json(filme);
});

router.put('/:filmesId', async (req, res) => {
  await Filme.update(req.body, {
    where: { id: req.params.filmesId }
  });
  res.json({ sucess: 'Foi modificado!'})
});

router.delete('/:filmesId', async (req, res) => {
  await Filme.destroy({
    where: { id: req.params.filmesId }
  });
  res.json({ sucess: 'Filme apagado!'})
});

module.exports = router;