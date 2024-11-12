import { Sales } from "../models/salesModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/token.js";
import mongoose from "mongoose";

export const salesSignup = async (req, res, next) => {
  try {
    const { name, company_name, GST_no, mail, password, profilePic } = req.body;

    if (!name || !mail || !password || !company_name || !GST_no) {
      return res.status(400).json({ message: "all field required" });
    }

    const salesExist = await Sales.findOne({ mail });

    if (salesExist) {
      return res.status(400).json({ message: "sales already exist" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newsales = new Sales({
      name,
      mail,
      company_name,
      GST_no,
      password: hashedPassword,
      profilePic,
    });
    await newsales.save();

    const token = generateToken(newsales, "salesUser");
    res.cookie("token", token);

    res.json({ message: "sale user created successfully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const salesLogin = async (req, res, next) => {
  try {
    const { mail, password } = req.body;

    if (!mail || !password) {
      return res.status(400).json({ message: "all field required" });
    }
    const checkSales = await Sales.findOne({ mail });

    if (!checkSales) {
      return res.status(404).json({ message: "sale user not found" });
    }

    const checkPassowrd = bcrypt.compareSync(password, checkSales.password);

    if (!checkPassowrd) {
      return res.status(400).json({ message: "sale user not authenticated" });
    }

    const token = generateToken(checkSales, "salesUser");
    res.cookie("token", token);

    res.json({ message: "sale user Login successfull" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const salesResetPassword = async (req, res, next) => {
  try {
    const { mail, updatedPassword } = req.body;
    const findsales = await Sales.findOne({ mail });

    if (!findsales) {
      return res.json({ message: "sales not authenticated" });
    }

    const passwordHash = bcrypt.hashSync(updatedPassword, 10);

    await Sales.updateOne({ mail: mail }, { $set: { password: passwordHash } });

    res.json({ message: "password changed succefully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const salesProfile = async (req, res, next) => {
  try {
    const salesId = req.sales.id;

    const salesProfile = await Sales.findById(salesId).select("-password");

    res.json({ message: "profile fetch successfully", data: salesProfile });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const salesLogout = async (req, res, next) => {
  try {
    res.clearCookie("token");

    res.json({ message: "sales logout successfully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const salesProfileUpdate = async (req, res, next) => {
  try {
    const { name, mail, company_name, profilePic } = req.body;

    const salesId = req.sales.id;

    await Sales.updateOne(
      { _id: new mongoose.Types.ObjectId(salesId) },
      {
        $set: {
          name: name,
          mail: mail,
          company_name: company_name,
          profilePic: profilePic,
        },
      }
    );

    res.json({ message: "profile updated success" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const salesDeleteAccount = async (req, res, next) => {
  try {
    const salesId = req.sales.id;
    await Sales.deleteOne({ _id: new mongoose.Types.ObjectId(salesId) });

    res.json({ message: "account deleted" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const checkSaleUser = async (req, res, next) => {
  try {
    res.json({ message: "user Verified" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};
