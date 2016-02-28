// Get all the players to display them.
Template.roster.helpers({
  players: function () {
    return Roster.find();
  }
});

// Click to remove a player from your roster.
Template.roster.events({
  "click .player": function () {
    // Un-gray out button in players list.
    Players.update(this._id, {
      $set: {checked: false}
    });

    // Remove from roster.
    Meteor.call('removeFromRoster', this)
  }
});

