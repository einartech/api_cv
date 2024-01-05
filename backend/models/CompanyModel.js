import mongoose from "mongoose";

const Company = mongoose.model('Company', {
  name: String,
  city: String,
  info: String,
});

export default Company;