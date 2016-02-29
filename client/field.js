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
      $(ev.currentTarget).text(player.name);
      selected_player.set();
    }
    else {
      selected_player.set();
    }
  }
});
