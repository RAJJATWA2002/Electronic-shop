import express from "express";
import {  brandList,createBrand,saveBrand,branddeletebyid,branddelete,editBrand,searchBrandByName,searchBrandById} from "../controller/brand.controller.js";
const router = express.Router();

router.get("/list",brandList);
router.post("/create",createBrand);
router.post("/saveAll",saveBrand);
router.post("/delete",branddeletebyid);
router.post("/deleteMany",branddelete);
router.post("/edit/:_id",editBrand);
router.get("/searchByName",searchBrandByName);
router.get("/searchById",searchBrandById);


export default router;
