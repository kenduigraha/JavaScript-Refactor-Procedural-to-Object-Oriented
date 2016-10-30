const controller = require('./controller_object/controller.js')

$(document).ready(function() {
  Dice.btnAddClicked()

  Dice.btnRollClicked()
})

class Dice {
  // =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
  // button : Add Dice!
  //=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
  static btnAddClicked () {
    controller.addDice()
  }
  // =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
  // buttpm : Roll Dice!
  //=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
  static btnRollClicked () {
    controller.updateDiceValue()
  }
}
