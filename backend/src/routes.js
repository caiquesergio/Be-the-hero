const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação no Backend
 * POST: Criar uma informação no Backend  
 * PUT: Alterar uam informação no Backend
 * DELETE: Deletar uma informação do Backend
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
  * route Params: Parâmetros utilizados para identificar recursos 
  * Requst Body: Corpo da requisição, utilizado para criar ou alterar recursos 
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */
   
   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users).select('*').where()
    */