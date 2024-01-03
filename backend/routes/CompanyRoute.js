// ApiRoutes.js
import express from "express";
import Company from "../models/CompanyModel.js";


const router = express.Router();

router.get('/api/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/api/companies', async (req, res) => {
  try {
    const newCompany = new Company(req.body);
    await newCompany.save();
    res.json(newCompany);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
