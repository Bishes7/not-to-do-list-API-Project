import express from "express";

const router = express.Router();

let DB = [
  {
    id: 1,
    task: "coding",
    hours: 50,
    type: "entry",
  },

  {
    id: 2,
    task: "cooking",
    hours: 30,
    type: "entry",
  },
  {
    id: 3,
    task: "Playing",
    hours: 10,
    type: "entry",
  },
];

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

router.patch("/", (req, res, next) => {
  const { id, type } = req.body;

  DB = DB.map((item) => {
    if (item.id === id) {
      item.type = type;
      return item;
    } else {
      return item;
    }
  });
  res.json({
    message: "Task Updated",
  });
});

// Delete Method

router.delete("/", (req, res, next) => {
  res.json({
    message: "Message from delete",
  });
});

export default router;
