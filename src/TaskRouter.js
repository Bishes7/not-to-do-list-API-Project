import express from "express";

const router = express.Router();

let DB = [];

//  Get Method
router.get("/", (req, res, next) => {
  DB.push(req.query);
  console.log(DB);
  res.json({
    message: "Message from get",
  });
});

// Post Method

router.post("/", (req, res, next) => {
  DB.push(req.body);
  console.log(DB);
  res.json({
    message: "data hase been updated successfully",
  });
});

// Put Method

router.put("/", (req, res, next) => {
  res.json({
    message: "Message from put",
  });
});

// Delete Method

router.delete("/", (req, res, next) => {
  res.json({
    message: "Message from delete",
  });
});

export default router;
