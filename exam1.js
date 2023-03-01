const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const hbs = require("express-handlebars");
//npm i express-handlebars
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//kurwa jaki zapis musi byc...
// app.engine('.hbs' , hbs({extname: '.hbs'}))
app.engine(".hbs", hbs.engine({ extname: ".hbs" }));

//Jakby ktoś miał problem z hbs is not a function to polecam zamienić linijkę
//app.engine('.hbs', hbs({extname:'.hbs'})); na
//app.engine('.hbs', hbs.engine({extname:'.hbs'}));

// '.hbs' - mowimy ze bedzie dotyczył plików .hbs
// uzywamy modułu hbs - hbs({}) jako funkcji  i
// wskazujemy ze bedziemy uzywac plików z roszezeniem .hbs
app.set("view engine", ".hbs");
// i wskazujemy ze silnikiem widoków bedzie .hbs --- zakrecone fchuj xD
//app.set("views", "./views"); // wskazujemy scieżke folder views gdzies wszystko jest

app.get("/jou", (req, res) => {
  res.render("home", {
    kurwa: "kurwamac123",
    zmienne: {
      pierwsza: "rower",
      druga: "kielbasa",
      trzecia: [123, 456, 789]
    }
  });
});


app.get('/asd', (req,res)=>{
  res.send('ok')
})
app.listen(3001, "localhost");
