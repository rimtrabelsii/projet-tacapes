const  mongoose = require('mongoose')
const schema = mongoose.Schema
const PanierSchema = new schema({
//   name_product: {
//     type: String,
//     require: true,
//   },
//   image_product: {},

//   price_product: {
//     type: Number,
//     // require: true,
//   },
produitsItems:[],
 total_price: {
    type: Number,
    // require: true,
  },
//  boutique_name:{
//     type: String,
//     // require: true,
//  },
 current_client:{
    type: String,
    // require: true,
 },


})
module.exports = mongoose.model('panier', PanierSchema)