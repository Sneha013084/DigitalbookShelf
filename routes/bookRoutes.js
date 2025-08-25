
// to create a router

const express = require("express");
const Book =require("../models/Book")

//create a router

const router = express.Router();


//create addfunction
//Create a new Book object from request body and save it


router.post("/", async(req ,res)=>{
    try{
         const newBook = new Book(req.body);
         const savedBook = await newBook.save();
         res.status(201).json(savedBook);

    } catch(error) {
        res.status(400).json({mesage:error.message}) //validation errors or missing fields
    }
});

//get all the books
// client send a get request to api/books
//Book.find() fetches all documents in the books collection and return json array of books

router.get("/",  async(req ,res) =>{
    try{

        const books = await Book.find();  // fetch all the books from the db
        res.json(books);
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
});

// Retrieves a single book by its _id.(req.params.id.)

router.get("/:id", async( req , res) =>{

    try{
    const book = await Book.findById(req.params.id);

    if(!book) return res.status(400).json({ message : "Book not found"});
    res.json(book);
    } catch (error) {
        res.status(500).json({message: error.message})
    }

});

//Updates a book by its _id using the data in req.body.

router.put ("/:id", async (req , res) =>{
    try{
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
        );
        if(!updatedBook) return res.status(400).json ({message : "Book not found"});
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json ({message: error.message});
    }
})

// Remove book by ID

router.delete ("/:id" , async (req , res) =>{
    try{
        const deletedBook = await Book.findByIdAndDelete( req.params.body);
        if(!deletedBook) return res.status(400).json ({ message: "Book not found"});
        res.json({message : "Book deleted successfully"});
        
    } catch(error) {
        res.status(500).json ({ message:error.message});
    }
});
module.exports = router;