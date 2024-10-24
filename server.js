const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let artists = [
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

const findArtistById = (id) => artists.find((a) => a.id === id);

app.get("/artists", (req, res) => {
  res.json(artists);
});

app.get("/", (req, res) => {
  res.send("Hello Express testing!!!!");
});

app.get("/artists/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const artist = findArtistById(id);

  if (!artist) {
    return res.status(404).send({ message: "Artist not found" });
  }

  res.json(artist);
});

app.post("/artists", (req, res) => {
  const artist = {
    id: artists.length + 1,
    name: req.body.name,
    genre: req.body.genre,
  };
  artists.push(artist);
  res.status(201).json(artist);
});

app.put("/artists/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const artist = findArtistById(id);

  if (!artist) {
    return res.status(404).send({ message: "Artist not found" });
  }

  artist.name = req.body.name;
  artist.genre = req.body.genre;
  res.status(200).json(artist);
});

app.delete("/artists/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const artist = findArtistById(id);

  if (!artist) {
    return res.status(404).send({ message: "Artist not found" });
  }

  artists = artists.filter((a) => a.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
