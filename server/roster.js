Meteor.methods({

  addToRoster: function (player) {
    if(Roster.find().count() < 15) {
      // Gray out button in players list.
      Players.update(player._id, {
        $set: {checked: true}
      });

      // Add to roster.
      return Roster.insert(player);
    }
  },

  removeFromRoster: function (player) {
    // Un-gray out button in players list.
    Players.update(player._id, {
      $set: {checked: false}
    });

    // Remove from roster.
    return Roster.remove(player);
  }

});
