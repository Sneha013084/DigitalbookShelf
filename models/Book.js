
const mongoose =require("mongoose");

//create a schema for the schema

const bookSchema = new mongoose.Schema({
     title:{
        type: String,
        required:[true,"Book title is required"],
     },

        author:{
            type:String,
            required:[true,"Author name is required"],
        },
            
        isbn: {
            type:String,
            unique:true,
        },

        publishDate :{
            type: Date,

        },
        inStock: {
            type:Boolean,
            default:true,
        },

        },{timestamps:true}
        );

        const Book = mongoose.model("Book" ,bookSchema);
        module.exports=Book;