import express from "express"
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyToken.js";
import { getAllUsers,getUser,deleteUser,updateUser } from "../controllers/user.js";

const router = express.Router();

//router.get("/checkauthentication", verifyToken,(req,res,next)=> {
//    res.send("hello user, you are logged in")
//})

//router.get("/checkuser/:id", verifyUser,(req,res,next)=> {
//    res.send("hello user, you are logged in and you can delete your account")
//})
//router.get("/checkAdmin/:id", verifyAdmin,(req,res,next)=> {
//    res.send("hello Admin, you are logged in and you can delete all account")
//})

//UPDATE
router.put("/:id", verifyUser,updateUser);
//DELETE
router.delete("/:id",verifyUser, deleteUser);
//GET
router.get("/:id",verifyUser, getUser);
//GET ALL
router.get("/",verifyAdmin, getAllUsers);

export default router;