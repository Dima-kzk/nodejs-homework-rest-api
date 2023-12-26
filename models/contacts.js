const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const date = await fs.readFile(contactsPath);
  const getContacts = JSON.parse(date);
  return getContacts;
};

const getContactById = async (Id) => {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === Id);
  return contact || null;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const updateContacts = contacts.filter((contact) => contact.id !== contactId);

  await fs.writeFile(contactsPath, JSON.stringify(updateContacts));

  return contacts.find((contact) => contact.id === contactId);
};

const addContact = async (body) => {
  const contacts = await listContacts();

  body.id = nanoid();

  contacts.push(body);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));

  return body;
};

const updateContact = async (id, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }

  contacts[index] = { id, ...body };

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
