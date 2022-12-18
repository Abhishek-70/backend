const {Schema, model} = require('../connection');

// defining the structure of Model
const myschema= new Schema({
    title : String , 
    type : String,
    assignedBy : String,
    assignedTo : String,
    status : {type : String, default: 'pending'},
    createdAt: Date,
    resolved: {type : Boolean, default: false}
})

//defining the name of a model

module.exports = model('issues',myschema);