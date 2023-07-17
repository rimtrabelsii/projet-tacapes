const express = require("express");
const panier = require("../models/PanierS");
const panierrouter = express.Router();
// add panier
// POST method

panierrouter.post("/addpanier", async (req, res) => {
  try {
    let newpanier = new panier({ ...req.body });
    let result = await newpanier.save();
    res.send({ panier: result, msg: "sucefuly aded" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// lister les paniers
// Get method
panierrouter.get("/allpanier", async (req, res) => {
  try {
    let result = await panier.find();
    res.send({ panier: result, msg: "tous les paniers " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// delete panier
// Delete method
panierrouter.delete("/:id", async (req, res) => {
  try {
    let result = await panier.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "panier deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update panier
// update method
panierrouter.put("/:id", async (req, res) => {
  try {
    let result = await panier.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ msg: " panier updated " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// add produit items
// put method
panierrouter.put("/produit/:id", async (req, res) => {
    try {
      let result = await panier.findByIdAndUpdate(
        {
          _id: req.params.id,
        },
        { $push: { produitsItems: req.body } }
      );
      res.send({ msg: " product added updated" });
    } catch (error) {
      console.log(error);
      res.send({ msg: "fail" });
    }
  });
module.exports = panierrouter;