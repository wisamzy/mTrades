const Client = require("../models/Client");

async function getAllClients(req, res) {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
}

async function getClientById(req, res) {
  try {
    const client = await Client.findById(req.params.id);
    res.json(client);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
}

async function createClient(req, res) {
  const newClient = new Client(req.body);

  try {
    const savedClient = await newClient.save();
    res.json(savedClient);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
}


async function updateClient(req, res) {
  try {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedClient);
    }
    catch (error) {
    res.status(400).json("Error: " + error);
    }
}

async function deleteClient(req, res) {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);
    res.json(deletedClient);
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
}


module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
};
