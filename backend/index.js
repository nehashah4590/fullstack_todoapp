const express = require('express');
const { connectMongoDb } = require("./connection");
const path = require("path");
const userRouter = require('./routes/task');
const app = express();
const cors = require("cors");
const PORT = 8000;
const uri = "mongodb+srv://ernehashah822:neha123@cluster0.uhcmytd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Connection
connectMongoDb(uri).then(() => {
  console.log("Connected to cluster 0 db");
}).catch((e)=>
{
  console.log(e);
});

app.use(express.urlencoded({extended:false}));
// Allow requests from a specific origin
const allowedOrigins = ['http://localhost:3000', 'http://example2.com'];
app.use(cors({
  origin: function (origin, callback) {
    // Check if the origin is allowed or if it's a browser preflight request
    if (!origin || allowedOrigins.includes(origin) || origin.startsWith('http://localhost')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));


//Routes
app.use("/api", userRouter);


app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`));