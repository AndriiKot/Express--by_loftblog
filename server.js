const express = require("express");
const app = express();
const port = 3000;

const artists = [
  {
    id: 1,
    name: "Metallica",
    genre: "Heavy Metal",
  },
  {
    id: 2,
    name: "AC/DC",
    genre: "Hard Rock",
  },
  {
    id: 3,
    name: "Nirvana",
    genre: "Grunge",
  },
];

app.get("/artists", (req, res) => {
  res.send(artists);
});

app.get("/", (req, res) => {
  res.send("Hello Express testing!!!!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
