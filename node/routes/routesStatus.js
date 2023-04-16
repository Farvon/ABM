import express from "express";

import {
  getAllStatus,
  getStatusById,
} from "../controllers/StatusController.js";

const routesStatus = express.Router();

routesStatus.get("/", getAllStatus);
routesStatus.get("/:id", getStatusById);

export default routesStatus;
