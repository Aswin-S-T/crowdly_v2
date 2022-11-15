const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Database configuration
const db = require("./config/db");
const userRouter = require("./routes/userRouter");
db.connect();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Routes configuration
app.use("/api/v1/u", userRouter);

app.get("/", (req, res) => {
  res.send("Nodejs is working....");
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
