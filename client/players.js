// Get all the players to display them.
Template.players.helpers({
  players: function () {
    return Players.find();
  }
});

// Click to add a player to your roster.
Template.players.events({
  "click .player": function () {

    // Add to roster.
    Meteor.call('addToRoster', this);
  }
});
