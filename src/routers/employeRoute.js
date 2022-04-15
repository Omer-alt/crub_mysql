
const express = require('express');
const router = express.Router();

const employeController = require("../controllers/employeController.js");


router.get('/:id', employeController.findById);

router.post('/', employeController.create);

router.get('/',employeController.findAll);

router.put('/:id', employeController.update);

router.delete('/:id', employeController.deleted);

module.exports = router;




