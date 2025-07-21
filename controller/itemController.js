const Item = require('../Model/itemModel');

let getAllItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

let createItem = async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).json(item);
};

let updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

let deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.status(204).send();
};


module.exports = {
  getAllItems,
  createItem,
  updateItem,
  deleteItem
};
