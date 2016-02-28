// Get all the players to display them.
Template.roster.helpers({
  players: function () {
    return Roster.find();
  }
});
