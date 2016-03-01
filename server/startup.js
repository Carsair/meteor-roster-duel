Meteor.startup(function() {
  Players.remove({});
  Players.insert({ name: 'Sergio Aguero' });
  Players.insert({ name: 'Leonel Messi' });
  Players.insert({ name: 'Player 1' });
  Players.insert({ name: 'Player 2' });
  Players.insert({ name: 'Player 3' });
  Players.insert({ name: 'Player 4' });
  Players.insert({ name: 'Player 5' });
  Players.insert({ name: 'Player 6' });
  Players.insert({ name: 'Player 7' });
  Players.insert({ name: 'Player 8' });
  Players.insert({ name: 'Player 9' });
  Players.insert({ name: 'Player 10' });
  Players.insert({ name: 'Player 11' });
  Players.insert({ name: 'Player 12' });
  Players.insert({ name: 'Player 13' });
  Players.insert({ name: 'Player 14' });
  Players.insert({ name: 'Player 15' });
  Players.insert({ name: 'Player 16' });

  Roster.remove({});

  Lineup.remove({});
  Lineup.insert({
    position: 'rb',
    role: 'defender'
  });
  Lineup.insert({
    position: 'rcb',
    role: 'defender'
  });
  Lineup.insert({
    position: 'lcb',
    role: 'defender'
  });
  Lineup.insert({
    position: 'lb',
    role: 'defender'
  });
  Lineup.insert({
    position: 'rm',
    role: 'midfielder'
  });
  Lineup.insert({
    position: 'rcm',
    role: 'midfielder'
  });
  Lineup.insert({
    position: 'lcm',
    role: 'midfielder'
  });
  Lineup.insert({
    position: 'lm',
    role: 'midfielder'
  });
  Lineup.insert({
    position: 'rs',
    role: 'forward'
  });
  Lineup.insert({
    position: 'ls',
    role: 'forward'
  });
});
