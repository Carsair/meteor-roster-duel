Players = new Mongo.Collection("players");
Roster  = new Mongo.Collection("roster");

if (Meteor.isClient) {
}

if (Meteor.isServer) {
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
