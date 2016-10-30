const view_object = require('../view_object/updateUI.js')

module.exports = {
  addDice : function () {
    $('#roller button.add').on('click', function() {
      console.log(`add new dice controller from public/javascripts/controller_object/controller.js`);
      view_object.updateUIDice()
    })
  },
  updateDiceValue : function () {
    $('#roller button.roll').on('click', function() {
      console.log(`update dice value controller from public/javascripts/controller_object/controller.js`);
      view_object.updateUIDiceValue()
    })
  }
}
