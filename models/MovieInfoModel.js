import mongoose from 'mongoose';
const { Schema } = mongoose;

const MovieInfoModle = new Schema({
  title:  String, // 
  description:String
  
});
mongoose.model("movieinfo", MovieInfoModel)