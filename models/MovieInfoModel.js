import mongoose from 'mongoose';
const { Schema } = mongoose;

const MovieInfoModeldata = new Schema({
  title:    String, // 
  overview: String
  
});

 export const movieInfoModel= mongoose.model("movieinfo", MovieInfoModeldata);