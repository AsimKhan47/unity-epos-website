// models/Contact.js
import db from "../db.js";

// Save new contact
export const saveContact = (contactData, callback) => {
  const query = "INSERT INTO contacts SET ?";
  db.query(query, contactData, callback);
};

// Get all contacts
export const getAllContacts = (callback) => {
  const query = "SELECT * FROM contacts";
  db.query(query, callback);
};
