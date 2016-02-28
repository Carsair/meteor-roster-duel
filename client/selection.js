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

Template.roster.events({
  "click .player": function () {
    Meteor.call('removeFromRoster', this)
  }
});

Template.roster.helpers({
  players: function () {
    return Roster.find();
  }
});
