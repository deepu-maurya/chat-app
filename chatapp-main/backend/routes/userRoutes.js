import express from "express";

import {
  authUser,
  registerUser,
  allUsers,
} from "../controllers/userControllers.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, allUsers); //ab ye allUser pe jane se pahele protect pe jayega
router.route("/").post(registerUser);
router.post("/login", authUser);

export default router;
