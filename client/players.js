// Get all the players to display them.
Template.players.helpers({
  players: function () {
    return Players.find();
  }
});
