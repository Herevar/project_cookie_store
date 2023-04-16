// const {basename, dirname, resolve, normalize, join} = require('path');
// var path = require('path');

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const hbs = require("express-handlebars");
const { homeRouter } = require("./routers/home");
const { configuratorRouter } = require("./routers/config");
const { orderRouter } = require("./routers/order");
const { handlebarsHelpers } = require("./utils/handlebars-helpers");


//npm i express-handlebars
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('public',)); // czyli nie jest potrzebne ; statyczne to strony poszczegolne
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//kurwa jaki zapis musi byc...
// app.engine('.hbs' , hbs({extname: '.hbs'}))
app.engine(".hbs", hbs.engine({ 
  extname: ".hbs",  //jakby tego nie było to przy kazdym pliku by trzeba pisac "asd.hbs"
  helpers: handlebarsHelpers, }));

//Jakby ktoś miał problem z hbs is not a function to polecam zamienić linijkę
//app.engine('.hbs', hbs({extname:'.hbs'})); na
//app.engine('.hbs', hbs.engine({extname:'.hbs'}));

// '.hbs' - mowimy ze bedzie dotyczył plików .hbs
// uzywamy modułu hbs - hbs({}) jako funkcji  i
// wskazujemy ze bedziemy uzywac plików z roszezeniem .hbs
app.set("view engine", ".hbs");
// i wskazujemy ze silnikiem widoków bedzie .hbs --- zakrecone fchuj xD
app.set("views", "./views"); // wskazujemy scieżke folder views gdzies wszystko jest



app.use('/', homeRouter);
app.use('/configurator', configuratorRouter);
app.use('/order', orderRouter);

app.get("/jo", (req, res) => {
  res.render("home_test", {
    kurwa: "kurwamac123",
    zmienne: {
      pierwsza: "rower",
      druga: "kielbasa",
      trzecia: [123, 456, 789]
    }
  });
});



app.listen(3002, "localhost");

//<img src="/provejt/home/herevar/workspace/public/LOGO.bmp">
// <!DOCTYPE html>
// <html>

// <head>
//   <title>Parcel Sandbox</title>
//   <meta charset="UTF-8" />
// </head>

// <body>
// <h1> taki zapis musi byc jak poniżej : body w 3 nawiasach </h1>

// </body>


// </html>

// console.log(__dirname)

// console.log(__filename)