import { saveContact, getAllContacts } from "../models/Contact.js";

export const submitContact = (req, res) => {
  const { full_name, email, phone, company, inquiry_type, message } = req.body;

  if (!full_name || !email) {
    return res.status(400).json({ error: "Full name and email are required" });
  }

  const contactData = { full_name, email, phone, company, inquiry_type, message };

  saveContact(contactData, (err, result) => {
    if (err) {
      console.error("Error saving contact:", err);
      return res.status(500).json({ error: "Failed to save contact" });
    }
    res.status(201).json({ success: true, message: "Contact saved successfully" });
  });
};

// New: Fetch all contacts
export const getContacts = (req, res) => {
  getAllContacts((err, results) => {
    if (err) {
      console.error("Error fetching contacts:", err);
      return res.status(500).json({ error: "Failed to fetch contacts" });
    }
    res.json(results);
  });
};
