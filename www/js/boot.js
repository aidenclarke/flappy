// State: Flappy.Boot

'use strict';

var Flappy = { };

Flappy.Boot = function () {};

Flappy.Boot.prototype = {

  init: function () {
    console.log("%c~~ Things that shouldnt exist: Minions, country music, etc.... ~~~\n",
                "color:#ff0000")
  },

  preload: function () {
    game.stage.backgroundColor = "#FF0000";
  },

  create: function () {
  }


};
