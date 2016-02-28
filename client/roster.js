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
