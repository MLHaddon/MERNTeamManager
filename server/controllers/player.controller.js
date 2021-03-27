const { Players } = require('../models/player.model');

module.exports = {
  allPlayers: (req, res) => {
    Players.find({})
      .then(player => res.json(player))
      .catch(err => res.json(err));
  },
  newPlayer: (req, res) => {
    const {firstName, lastName, preferredPos} = req.body;
    Players.create({
      firstName,
      lastName,
      preferredPos
    })
      .then(new_player => res.json(new_player))
      .catch(err => res.json(err));
  },
  onePlayer: (req, res) => {
    Players.findOne({_id: req.params.id})
      .then(player => res.json(player))
      .catch(err => res.json(err));
  },
  updatePlayer: (req, res) => {
    Players.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators:true})
      .then(player => res.json(player))
      .catch(err => res.json(err));
  },
  deletePlayer: (req, res) => {
    Players.deleteOne({_id: req.params.id})
      .then(success => res.json(success))
      .catch(err => res.json(err));
  }
}