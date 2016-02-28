#Install

  clone repo

#Run

  `meteor`

#Organization

Folders:

  style - holds css
  templates - holds html
  client - holds client side js
  server - holds server side js
  common - holds js to run on both client and server

Files:

  There is a file for each component in the app. Typically, a template file
  (html) will have an associated style file (css), an associated common routing
  file (js), and both a client and server side files (js).

  Files should only hold info/code about the component they represent.  For
  nested components this is a judgement call; favor putting it in the parent.

#Dev

Pages:

  (todo) create account - a player can battle another user's roster
  (todo) login - a player can battle another user's roster
  selection - a user can select a roster of 15 players
  (todo) match - a player can battle another user's roster
