const express = require('express');
const router = express.Router();
const itemController = require('../controller/itemController');
const authMiddleware = require('../middleware/auth'); // If protected



// router.get('/', itemController.getAllItems);
// router.post('/', itemController.createItem);
// router.put('/:id', itemController.updateItem);
// router.delete('/:id', itemController.deleteItem);

module.exports = router;
