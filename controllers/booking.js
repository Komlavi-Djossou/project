const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('hotel').collection('bookings').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createClient = async (req, res) => {
  const client = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    city: req.body.city,
    country: req.body.country,
    user_profile_id: req.body.user_profile_id,
    vehicle_id: req.body.vehicle_id,
    discount_id: req.body.discount_id,
    discount_type: req.body.discount_type,
    discount: req.body.discount
  };
  const response = await mongodb.getDb().db('hotel').collection('bookings').insertOne(client);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};


const updateClient = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const client = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    city: req.body.city,
    country: req.body.country,
    user_profile_id: req.body.user_profile_id,
    vehicle_id: req.body.vehicle_id,
    discount_id: req.body.discount_id,
    discount_type: req.body.discount_type,
    
  };
  const response = await mongodb
  .getDb()
  .db('hotel')
  .collection('bookings')
  .replaceOne({ _id: userId }, client);
console.log(response);
if (response.modifiedCount > 0) {
  res.status(204).send();
} else {
  res.status(500).json(response.error || 'Some error occurred while updating the contact.');
}
};


const deleteClient = async (req, res) =>{
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('hotel').collection('bookings').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
  };



  
 

  


module.exports = { getAll, createClient, updateClient, deleteClient };module.exports = {
  getAll,
  createClient,
  updateClient,
  deleteClient
};