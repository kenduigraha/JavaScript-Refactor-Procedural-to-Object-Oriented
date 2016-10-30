$(document).ready(function() {
  // let dice = new Dice()

  Dice.btnAddClicked()

  Dice.btnRollClicked()
})

class Dice {
  // constructor(name){
  //   this.name = name || null
  // }

  // =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
  // button : Add Dice!
  //=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
  static btnAddClicked (){
    $('#roller button.add').on('click', function() {
      Dice.updateUIDice()
    })
  }

  static updateUIDice (){
    console.log("WAT")
    return $('.dice').append('<div class="die">0</div>')
  }

  // =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
  // buttpm : Roll Dice!
  //=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
  static btnRollClicked (){
    $('#roller button.roll').on('click', function() {
      Dice.updateUIDiceValue()
    })
  }

  static updateUIDiceValue () {
    $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1)
      $(die).text(value)
    })
  }

}
