import { users, contacts } from "../shared/schema.js";

// modify the interface with any CRUD methods
// you might need

export class MemStorage {
  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.currentId = 1;
    this.currentContactId = 1;
  }

  async getUser(id) {
    return this.users.get(id);
  }

  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser) {
    const id = this.currentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact) {
    const id = this.currentContactId++;
    const contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getAllContacts() {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();