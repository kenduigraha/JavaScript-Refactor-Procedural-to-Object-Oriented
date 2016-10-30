module.exports = {
  updateUIDice: function () {
    console.log("added dice from public/javascripts/view_object/updateUI.js")
    $('.dice').append('<div class="die">0</div>')
  },
  updateUIDiceValue: function () {
    console.log(`updated value from public/javascripts/view_object/updateUI.js`);
    $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1)
      $(die).text(value)
    })
  }
}
