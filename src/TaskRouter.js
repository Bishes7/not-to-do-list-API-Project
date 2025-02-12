import express from "express";

const router = express.Router();
import mongoose, { Schema } from "mongoose";

// Database table selection

// Database  table selection
const taskSchema = new mongoose.Schema({}, { strict: false });
const TaskCollection = mongoose.model("Task", taskSchema);

//  Get Method
router.get("/", async (req, res, next) => {
  const task = await TaskCollection.find();
  console.log(task);

  res.json({
    message: "Message from get",
    task,
  });
});

// Post Method

router.post("/", async (req, res, next) => {
  console.log(req.body);

  const result = await TaskCollection(req.body);
  console.log(result);
  res.json({
    message: "data hase been updated successfully",
    result,
  });
});

// Put Method

router.patch("/", (req, res, next) => {
  const { id, type } = req.body;

  res.json({
    message: "Task Updated",
  });
});

// Delete Method

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  res.json({
    message: "Message from delete",
  });
});

export default router;
