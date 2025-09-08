import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const getAllUsers = async () => {
  return await User.find();
};

export const createUser = async (data) => {
  const { name, email, phone, password } = data;

  const existingUser = await User.findOne({
    $or: [{ email }, { phone }],
  });

  if (existingUser) {
    throw new Error("Email or phone already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);


  const user = new User({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  return await user.save();
};