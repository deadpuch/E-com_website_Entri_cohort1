import mongoose from "mongoose";

const salesModel=mongoose.Schema({
    name: {
        type: String,
        required: true,
      },

    company_name: {
        type: String,
        required: true,
      },

    GST_no: {
        type: String,
        required: true,
      },
    
      mail: {
        type: String,
        required: true,
        unique: true,
      },
    
      password:{
        type:String,
        required:true,
        minLength:6,
      },
    
      profilePic:{
        type:String,
        default:"https://www.vecteezy.com/vector-art/20765399-default-profile-account-unknown-icon-black-silhouette"
      },

      
},
{
    timestamps: true,
})

export const Sales=mongoose.model("salesusers",salesModel)

