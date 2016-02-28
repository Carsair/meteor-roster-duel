Meteor.startup(function() {
  Players.remove({});
  Roster.remove({});
  Players.insert({ name: "Sergio Aguero" });
  Players.insert({ name: "Leonel Messi" });
  Players.insert({ name: "Player 1" });
  Players.insert({ name: "Player 2" });
  Players.insert({ name: "Player 3" });
  Players.insert({ name: "Player 4" });
  Players.insert({ name: "Player 5" });
  Players.insert({ name: "Player 6" });
  Players.insert({ name: "Player 7" });
  Players.insert({ name: "Player 8" });
  Players.insert({ name: "Player 9" });
  Players.insert({ name: "Player 10" });
  Players.insert({ name: "Player 11" });
  Players.insert({ name: "Player 12" });
  Players.insert({ name: "Player 13" });
  Players.insert({ name: "Player 14" });
  Players.insert({ name: "Player 15" });
  Players.insert({ name: "Player 16" });

  return Meteor.methods({

    removeFromRoster: function(player) {
      return Roster.remove(player);
    },

    addToRoster: function(player) {
      if(Roster.find().count() < 15) {
        return Roster.insert(player);
      }
    }

  });
});
