import express from 'express';
import {Signup, Login, deleteUser, updatePassword, handleAdd, handleDelete, handleUpdate, getAllCards} from "../controllers/userController";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.delete("/delete", deleteUser);
router.patch("/patch", updatePassword);

router.post("/addCard", handleAdd);
router.delete("/deleteCard/:id", handleDelete);
router.patch("/updateCard/:id", handleUpdate);
router.get("/getCards", getAllCards);

// router.delete("/delete/:email", deleteUser);

export default router;