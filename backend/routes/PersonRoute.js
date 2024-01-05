// ApiRoutes.js
import express from "express";
import Person from "../models/PersonModel.js";


const router = express.Router();

router.get('/api/persons', async (req, res) => {
  try {
    console.log('intento entrar a /api/persons');
    const persons = await Person.find();
    res.json(persons);
    console.log(persons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/api/persons', async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    await newPerson.save();
    res.json(newPerson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
