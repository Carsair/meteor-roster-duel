Template.players.helpers({
  players: function () {
    return Players.find();
  }
});

Template.players.events({
  "click .player": function () {
    Meteor.call('addToRoster', this)
  }
});
