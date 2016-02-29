#Install

  clone repo

#Run

  `meteor`

#Organization

Folders:

  * style - holds css
  * templates - holds html
  * client - holds client side js
  * server - holds server side js
  * common - holds js to run on both client and server

Files:

  There is a file for each component in the app. Typically, a template file
  (html) will have an associated style file (css), and associated common, route,
  client, and server files (js).

  Note, there may sometimes be a slight discrepancy if a template is named
  differently than the route it represents (for UI reasons), or if a template
  does not have its own route (it's used in another template).

  Files should only hold info/code about the component they represent.  For
  nested components this is a judgement call; favor putting it in the parent.

  There is an issue that putting code for a component will enable that behavior
  for all pages.  For example, we want the roster code to remove a player from
  the roster when we click on it when we are on the "selection" page, but on the
  "match" page we want to put that player into the lineup. To fix this we have a
  convention of using html/css class names in a way that corresponds to the
  javascript that uses those class names to namespace the events to the page it
  is used on?

#Dev

Pages:

  * (todo) create account - a player can battle another user's roster
  * (todo) login - a player can battle another user's roster
  * selection - a user can select a roster of 15 players
  * (in progress) match - a player can battle another user's roster on the field
