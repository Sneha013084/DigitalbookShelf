
const express = require("express");
const dotenv = require("dotenv");
const connectDB= require("./db/connection");
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();

const app = express();
// Middleware

app.use(express.json());

// Routes
 app.use("/api/books", bookRoutes);

 connectDB();

 const PORT = process.env.PORT || 5000;
 app.listen(PORT, () => console.log (`Server running on port ${PORT}`));

