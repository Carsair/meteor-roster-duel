// Get all the players in the lineup to display them.
Template.lineup.helpers({
  positions: function () {
    return Lineup.find();
  }
});
