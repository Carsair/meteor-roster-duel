Players = new Mongo.Collection("players");
Roster  = new Mongo.Collection("roster");

if (Meteor.isClient) {

  Template.players.helpers({
    players: function () {
      return Players.find();
    }
  });

  Template.players.events({
    "click .player": function () {
      Meteor.call('addToRoster', this)
    }
  });

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

}

if (Meteor.isServer) {
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
}

// Template.field.events({
//     'click .position': function (ev) {
//       ev.preventDefault();
//       console.log(ev);
//     }
//   });


// // counter starts at 0
//   Session.setDefault('counter', 0);

//   Template.hello.helpers({
//     counter: function () {
//       return Session.get('counter');
//     }
//   });

//   Template.hello.events({
//     'click button': function () {
//       // increment the counter when button is clicked
//       Session.set('counter', Session.get('counter') + 1);
//     }
//   });

//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
