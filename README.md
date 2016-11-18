# JavaScript Refactor Procedural to Object-Oriented

## How to Run
1. `npm install`
2. `npm start`
3. go to http://localhost:3000

## Introduction
Refactor from javascript procedural programming into javascript object oriented programming using node.js and express framework

### Procedural's File
app.html
```
<html>
  <head>
    <title>
    </title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js">
    </script>
    <script src="app.js"></script>
    <style>
    .die {
      text-align: center;
      float: left;
      border: 1px solid black;
      padding: 40px
    }
    </style>
  </head>
  <body>
    <div id="roller">
      <button class="add">Add dice!</button>
      <button class="roll">Roll dice!</button>
      <div class="dice"></div>
    </div>
  </body>
</html>
```

app.js
```
$(document).ready(function() {
  $('#roller button.add').on('click', function() {
    console.log("WAT")
    $('.dice').append('<div class="die">0</div>')
    })

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1)
      $(die).text(value)
    })
  })
})
```

## Dependencies
1. [node.js](nodejs.org)
2. express framework
3. nodemon
4. jQuery
5. webpack

## Button Action
| Button | Action |
|--------|--------|
| Add Dice! | Generate new dice with 0 value |
| Roll Dice! | Generate new dice's value in exist dices |


## Tree Structure

```
.
├── README.md
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── footer.jade
    ├── index.jade
    └── layout.jade

7 directories, 10 files
```

## Contributor
Ken Duigraha Putra &copy; 2016

## Licence
MIT
