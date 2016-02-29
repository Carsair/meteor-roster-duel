// Get the selected player.
Template.field.helpers({
  selected_player: function () {
    player = selected_player.get();
    if (player.name) {
      return player.name
    }
    return null
  }
});

// Click to start adding a player to the field.
Template.field.events({
  "click .roster .player": function () {
    selected_player.set(this);
  }
});
