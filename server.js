// Import express at first
import express from "express";
const app = express();

const PORT = 8000;

// Execute in the browser
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
