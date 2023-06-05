import express from "express";
import {signUpController, signInController} from "../controllers/userController.js";
import { getAllProducts, getProductById } from "../controllers/productController.js";

// creating router
const router = express.Router();

router.post("/signin", signInController);
router.post("/signup", signUpController);
router.get("/product", getAllProducts);
router.get('/product/:id', getProductById)

export default router;
