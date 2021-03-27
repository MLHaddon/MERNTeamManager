const PlayerController = require('../controllers/player.controller');

module.exports = app => {
  app.get('/api/players', PlayerController.allPlayers);
  app.post('/api/players/new', PlayerController.newPlayer);
  app.get('/api/players/:id', PlayerController.onePlayer);
  app.put('/api/players/:id/update', PlayerController.updatePlayer);
  app.delete('/api/players/:id/delete', PlayerController.deletePlayer);
}