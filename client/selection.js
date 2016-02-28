// Click to add a player to your roster.
Template.selection.events({
  "click .selection .players .player": function () {

    // Add to roster.
    Meteor.call('addToRoster', this);
  }
});


// Click to remove a player from your roster.
Template.selection.events({
  "click .selection .roster .player": function () {

    // Remove from roster.
    Meteor.call('removeFromRoster', this)
  }
});

