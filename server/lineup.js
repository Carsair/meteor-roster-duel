Meteor.methods({

  updateLineup: function (position, player) {
    currentPos = Lineup.findOne({position: position});
    if (!currentPos.player) {
      Lineup.update(
        {position: position},
        {$set: {player: player}}
      );
    }
    else {
      throw new Error("FAILED TO INSERT, ALREADY A PLAYER THERE");
    }
  }

});
