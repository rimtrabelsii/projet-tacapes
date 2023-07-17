express = require("express");
const commande = require("../models/CommandeS");
const commanderouter = express.Router();
// add commande
// POST method

commanderouter.post("/addcommande", async (req, res) => {
  try {
    let newcommande = new commande({ ...req.body });
    let result = await newcommande.save();
    res.send({ commande: result, msg: "successfully aded" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// lister les commandes
// Get method
commanderouter.get("/allcommande", async (req, res) => {
  try {
    let result = await commande.find();
    res.send({ commande: result, msg: "tous les commandes " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// delete commande
// Delete method
 commanderouter.delete("/:id", async (req, res) => {
  try {
    let result = await commande.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "commande deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update commande
// update method
commanderouter.put("/:id", async (req, res) => {
  try {
    let result = await commande.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ msg: " commande updated " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

commanderouter.put(":id", async (req, res) => {
    try {
      let result = await commande.findByIdAndUpdate(
        {
          _id: req.params.id,
        },
        { $push: { commande: req.body } }
      );
      res.send({ msg: " commande added updated" });
    } catch (error) {
      console.log(error);
      res.send({ msg: "fail" });
    }
  });
module.exports = commanderouter;