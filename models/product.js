const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema({
    Name: {
        type : String,
        required: true
    },
    Description: {
        type : String,
        required : true 
    },
    Ram: {
        type : Number,
        required : true
    },
    Processor: {
        type : String,
        required : true
    },
    Type:{
        type: String,
        required:true,
        enum : ['Mobile','Laptop'],
        default: 'Mobile'
    }
   
})

module.exports = mongoose.model('Product', productSchema)