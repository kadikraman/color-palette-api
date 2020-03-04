const express = require("express");
const bodyParser = require("body-parser");
const { palettes } = require("./data");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/palettes", (req, res) => {
  const { search } = req.query;

  if (search) {
    res.send(
      palettes.filter(p =>
        p.paletteName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }
  res.send(palettes);
});

app.get("/palettes/:id", (req, res) => {
  const { id } = req.params;

  const recipe = palettes.find(r => String(r.id) === String(id));

  if (recipe) {
    res.send(recipe);
  }

  res.status(404).send("Not found");
});

// app.post('/palettes', (req, res) => {
//   const { body } = req;

//   if (!body.name) {
//     res.status(422).send('Parameter name is required');
//   }

//   const recipe = {
//     id: recipes.length,
//     name: body.name,
//   };

//   recipes.push(recipe);

//   res.status(401).send(recipe);
// });

app.listen(port, () =>
  console.log(`Beautiful color palettes waiting for you at port ${port}!`)
);
