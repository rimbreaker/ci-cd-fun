import { getColorName } from "../controllers/colorsController";
import express from "express";


const router = express.Router();

/**
 * @swagger
 * tags:
 *    name: colors API
 *    description: Ednpoints used for fetching color names
 */

/**
 * @swagger
 *
 * /api/color/{colorHash}:
 *   get:
 *      parameters:
 *        - in : path
 *          name : colorHash
 *          required : true
 *          type : string
 *      description: An endpoint returning a pantone name for color hash
 *      tags: [colors API]
 *      responses:
 *          '200':
 *               description : a Pantone name for a given color
 */
router.get("/color/:id", getColorName);

export default router;
