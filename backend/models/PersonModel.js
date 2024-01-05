import mongoose from "mongoose";

const Person = mongoose.model('Person', {
  name: String,
  surname: String,
  age: Number,
  city: String,
  adress: String,
  profession: String,
  hobbies: String,
});

export default Person;