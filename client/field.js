// Click to start adding a player to the field.
Template.field.events({
  "click .roster .player": function () {
    console.log("this: ", this);
    selected_player = this;
    console.log("selected_player: ", selected_player);
  }
});
