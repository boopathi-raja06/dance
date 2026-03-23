import Enquiry from "../models/Enquiry.js";

export const createEnquiry = async (req, res, next) => {
  try {
    const { name, phone, selectedClass, message } = req.body;

    if (!name || !phone || !selectedClass) {
      return res.status(400).json({
        message: "Name, phone, and selected class are required",
      });
    }

    const enquiry = await Enquiry.create({
      name,
      phone,
      selectedClass,
      message,
    });

    return res.status(201).json(enquiry);
  } catch (error) {
    return next(error);
  }
};

export const getEnquiries = async (_req, res, next) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    return res.json(enquiries);
  } catch (error) {
    return next(error);
  }
};

export const deleteEnquiry = async (req, res, next) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);

    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    return res.json({ message: "Enquiry deleted successfully" });
  } catch (error) {
    return next(error);
  }
};

export const markContacted = async (req, res, next) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { contacted: true },
      { new: true }
    );

    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    return res.json(enquiry);
  } catch (error) {
    return next(error);
  }
};
