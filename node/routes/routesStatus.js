import express from "express";

import {
  getAllStatus,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus,
} from "../controllers/StatusController.js";

const routesStatus = express.Router();

routesStatus.get("/", getAllStatus);
routesStatus.get("/:id", getStatusById);
routesStatus.post("/", createStatus);
routesStatus.put("/:id", updateStatus);
routesStatus.delete("/:id", deleteStatus);

export default routesStatus;
