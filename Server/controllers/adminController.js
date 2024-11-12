import { Admin } from "../models/adminModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/token.js";
import mongoose from "mongoose";

export const adminSignup = async (req, res, next) => {
  try {
    const { name, mail, password, profilePic } = req.body;

    if (!name || !mail || !password) {
      return res.status(400).json({ message: "all field required" });
    }

    const adminExist = await Admin.findOne({ mail });

    if (adminExist) {
      return res.status(400).json({ message: "admin already exist" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newadmin = new Admin({
      name,
      mail,
      password: hashedPassword,
      profilePic,
    });
    await newadmin.save();

    const token = generateToken(newadmin, "admin");
    res.cookie("token", token);

    res.json({ message: "admin created successfully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const adminLogin = async (req, res, next) => {
  try {
    const { mail, password } = req.body;

    if (!mail || !password) {
      return res.status(400).json({ message: "all field required" });
    }
    const checkadmin = await Admin.findOne({ mail });

    if (!checkadmin) {
      return res.status(404).json({ message: "admin not found" });
    }

    const checkPassowrd = bcrypt.compareSync(password, checkadmin.password);

    if (!checkPassowrd) {
      return res.status(400).json({ message: "admin not authenticated" });
    }

    const token = generateToken(checkadmin, "admin");
    res.cookie("token", token);

    res.json({ message: "admin Login successfull" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const adminResetPassword = async (req, res, next) => {
  try {
    const { mail, updatedPassword } = req.body;
    const findadmin = await Admin.findOne({ mail });

    if (!findadmin) {
      return res.json({ message: "admin not authenticated" });
    }

    const passwordHash = bcrypt.hashSync(updatedPassword, 10);

    await Admin.updateOne({ mail: mail }, { $set: { password: passwordHash } });

    res.json({ message: "password changed succefully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const adminProfile = async (req, res, next) => {
  try {
    const adminId = req.admin.id;

    const adminProfile = await Admin.findById(adminId).select("-password");

    res.json({ message: "profile fetch successfully", data: adminProfile });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const adminLogout = async (req, res, next) => {
  try {
    res.clearCookie("token");

    res.json({ message: "admin logout successfully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const adminProfileUpdate = async (req, res, next) => {
  try {
    const { name, mail, profilePic } = req.body;

    const adminId = req.admin.id;

    await Admin.updateOne(
      { _id: new mongoose.Types.ObjectId(adminId) },
      { $set: { name: name, mail: mail, profilePic: profilePic } }
    );

    res.json({ message: "profile updated success" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const adminDeleteAccount = async (req, res, next) => {
  try {
    const adminId = req.admin.id;
    await Admin.deleteOne({ _id: new mongoose.Types.ObjectId(adminId) });

    res.json({ message: "account deleted" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const checkAdmin = async (req, res, next) => {
  try {
    res.json({ message: "admin verified" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};
