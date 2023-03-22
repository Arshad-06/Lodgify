import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/*router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Admin Successfully Verified!");
});

router.get("/checkUser/:id", verifyUser, (req, res, next) => {
  res.send("User Successfully Verified!");
});

router.get("/checkAuth", verifyToken, (req, res, next) => {
  res.send("User Successfully Authenticated!");
});*/

//Controller CRUD Functions
router.get("/", verifyAdmin, getAllUsers);
router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);

export default router;
