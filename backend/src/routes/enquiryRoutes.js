import express from "express";
import {
  createEnquiry,
  deleteEnquiry,
  getEnquiries,
  markContacted,
} from "../controllers/enquiryController.js";

const router = express.Router();

router.post("/enquiry", createEnquiry);
router.get("/enquiries", getEnquiries);
router.delete("/enquiries/:id", deleteEnquiry);
router.patch("/enquiries/:id/contacted", markContacted);

export default router;
