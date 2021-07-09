const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
];

// choose random compliment
let randomIndex = Math.floor(Math.random() * compliments.length);
let randomCompliment = compliments[randomIndex];

res.status(200).send(randomCompliment);

});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A dubious friend may be an enemy in camouflage.",
  "A friend is a present you give yourself.",
  "A light heart carries you through all the hard times.",
  "A person of words and not deeds is like a garden full of weeds.",
  "Don’t be discouraged, because every wrong attempt discarded is another step forward.",
  
];

// choose random fortune
let randomIndex = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomIndex];

res.status(200).send(randomFortune);

});



app.listen(4000, () => console.log("Server running on 4000"));
