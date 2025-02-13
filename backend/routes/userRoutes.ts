import express from 'express';
import {Signup, Login, deleteUser, updatePassword} from "../controllers/userController";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.delete("/delete", deleteUser);
router.patch("/patch", updatePassword);
// router.delete("/delete/:email", deleteUser);

export default router;