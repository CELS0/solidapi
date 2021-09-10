import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("HEllo word");
})
router.post("users", (req, res) => {
  return  res.status(201).send();
})

export { router };