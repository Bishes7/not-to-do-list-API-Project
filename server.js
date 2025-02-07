// Import express at first
import express from "express";
const app = express();

app.use(express.json());

const PORT = 8000;

import taskRouter from "./src/TaskRouter.js";

// Using the middleware

app.use("/api/v1/tasks", taskRouter);
// Execute in the browser
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
