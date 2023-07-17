mongoose = require('mongoose')
const schema = mongoose.Schema
const CommandeSchema = new schema({
//   name_product: {
//     type: String,
//     require: true,
//   },
//   image_product: {},
//   price_product: {
//     type: Number,
//     // require: true,
//   },
 total_price: {
    type: Number,
    // require: true,
  },
//  boutique_name:{
//     type: String,
//     // require: true,
//  },
//  current_client:{
//     type: String,
//     // require: true,
//  },
commande:[],
 state:{
    type: String,
    // require: true,
 },
 date_validation:{
    type: Date,
    // require: true,
 },
 date_livraison:{
    type: Date,
    // require: true,
 },
 
})
module.exports = mongoose.model('commande', CommandeSchema)