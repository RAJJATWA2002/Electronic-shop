import express from "express";
import { laptopList, createLaptop, saveLaptopMultiple, laptopdeletebyid, laptopdelete, editLaptop, searchLaptopById, searchLaptopByName } from "../controller/laptop.controller.js"

const router = express.Router();


router.post("/create", createLaptop);
router.post("/saveAll", saveLaptopMultiple);
router.get("/list", laptopList);
router.post("/delete", laptopdeletebyid);
router.post("/deleteMany", laptopdelete);
router.post("/edit/:_id", editLaptop);
router.get("/searchByName", searchLaptopByName);
router.get("/searchById", searchLaptopById);

export default router;