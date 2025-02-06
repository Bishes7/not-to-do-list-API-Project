import express from "express";

const router = express.Router();

//  Get Method
router.get("/", (req, res, next) => {
  res.json({
    message: "Message from get",
  });
});

// Post Method

router.post("/,", (req, res, next) => {
  res.json({
    message: "Message from post",
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
