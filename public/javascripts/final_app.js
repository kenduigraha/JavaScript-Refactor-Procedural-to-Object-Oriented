/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const controller = __webpack_require__(1)

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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const view_object = __webpack_require__(2)

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


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);