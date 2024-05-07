const express = require('express');
const router = express.Router();
const burgers = require('../utils/data')

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.send("Welcome to express");
});

// colocar las rutas aquí
router.get('/api/v1/burgers', (req, res) => {
    res.json(burgers);
});

router.get('/api/v1/burgers/:id', (req, res) => {
    const { id } = req.params
    const name = id;
    console.log(name);


    const burger = burgers.find((burger) => burger.name === name);

    ;
    if (!burger)
        res.status(404).json({ message: "Burger not found" });

    res.json(burger);
});


module.exports = router;
