const  mongoose = require('mongoose')
const schema = mongoose.Schema
const ArticleSchema = new schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    // require: true,
  },
  image: {},

quantity: {
    type: Number,
    // require: true,
  },
 price: {
    type: Number,
    // require: true,
  },
  size: {
    type: Array,
    // require: true,
  },
  category: {
    type: String,
    // require: true,
  },
  nom_boutique: {
    type: String,
    // require: true,
  },
  images:{
    type:Array,
//  require:true
  }
 
})
module.exports = mongoose.model('article', ArticleSchema)