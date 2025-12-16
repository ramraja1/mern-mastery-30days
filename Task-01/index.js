import express from "express";
import PawanRouter from "./routes/task_routes.js"
const app = express();

// ***********************************************

// 1. Hello API
// Create an Express server with one route: GET / → returns { message: "API is running" }.

// Folder: server/

// Use nodemon.


app.get("/", (req, res) => {
  res.send("Hii I am alive .....");
});
app.get("/pawan", (req, res) => {
  res.send("hii you are on pawan path");
});


// ***********************************************

// 2. Routes & Params
// Add routes:

// GET /api/hello → "Hello Pawan"

// GET /api/hello/:name → "Hello <name>" from URL param.

app.get('/api/hello',(req,res)=>{
    res.send('Hello Pawan');
})

app.get('/api/hello/:name',(req,res)=>{
    const name=req.params.name;
    res.send(`Hello ${name}`);
})


// ***********************************************

// // 3. Query Params
// Route: GET /api/sum?a=10&b=20 → responds with { result: 30 }.

// Parse query params

// Handle missing params with an error message.

app.get('/api/sum',(req,res)=>{
    res.send(`result : ${Number(req.query.a)  + Number(req.query.b)}.`)
})


// ***********************************************

// 4. Basic Middleware
// Create a logger middleware that logs: method + URL + time for each request.
// Use app.use(logger) on all routes.
function Logger(req,res,next){
    const time=new Date().toISOString();
    console.log(`${req.method } ${req.url} ${time} `);
    next();
};
app.use(Logger);
app.get("/ram",(req,res)=>{
    res.json("HII");
})

// ***********************************************

// 5. Error Handling Middleware
// Create a route GET /api/crash that throws an error intentionally.
// Add a global error handler middleware → returns { message: "Something went wrong" }.



app.get('/api/crash',(req,res)=>{
    throw new Error('intentional error !');
});


// ***********************************************

// 6. Separate Routes File
// Move all /api/* routes into a separate file like routes/api.js.
// Use app.use("/api", apiRouter).

app.use('/paw',PawanRouter);


// it should be always at lower
app.use((err,req,res,next)=>{
    console.error(err.message);
    res.status(500).json({message:"something went wrong..."});
})
app.listen("5000", () => {
  console.log("working...");
});
