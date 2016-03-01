// Get the selected player.
Template.field.helpers({
  selected_player: function () {
    player = selected_player.get();
    if (player && player.name) {
      return player.name
    }
    return null
  }
});

// Click a player to start adding a player to the field.
Template.field.events({
  "click .roster .player": function () {
    selected_player.set(this);
  }
});

// Click a position to finalize adding a player to the field.
Template.field.events({
  "click .home_team .position": function (ev) {
    player = selected_player.get();
    if (player && player.name) {
      // Add player to Lineup.
      position = $(ev.currentTarget).attr("id");
      position = position.replace("home_", "")
      Meteor.call('updateLineup', position, player, function (err, res) {
        if (!err) {
          // Reset selected_player to blank.
          selected_player.set();

          // Mark the inserted player as already added.
          Roster.update(player._id, {
            $set: {checked: true}
          });
        }
      });

    }
    else {
      selected_player.set();
    }
  }
});
