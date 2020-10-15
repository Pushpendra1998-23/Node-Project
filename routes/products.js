const express = require('express');
const router = express.Router();
const Product =require('../models/product');


router.get('/', async (req,res) => {
try{
    const products = await Product.find()
    res.json(products)
} catch (err) {
  res.status(500).json({ message: err.message })
}
})

router.post('/', async (req, res) => {
    const product = new Product({
        Name: req.body.Name,
        Description : req.body.Description,
        Processor: req.body.Processor,
        Ram:req.body.Ram,
        Type:req.body.Type
    }) 
    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})



module.exports = router;
