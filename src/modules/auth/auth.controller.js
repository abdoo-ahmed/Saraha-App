import { Router } from "express";
import { checkUserExist } from "../user/user.service.js";

const router =Router();

router.post("/signup" , async (req,res , next)=>{
    const { email, phoneNumber } = req.body;

    const userExist = await checkUserExist({
        $or: [
            { email: { $eq: email, $exists: true, $ne: null } },
            { phoneNumber: { $eq: phoneNumber, $exists: true, $ne: null } }
        ]
    });
    if (userExist) throw new Error("user already exist", { cause: 409 });
})




export default router;