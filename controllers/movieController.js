import  { movieInfoModel }  from '../models/MovieInfoModel.js';



export const  saveMovieInfo = async (req,res) => {
    console.log("receiving data from client");
   
    const movieInfo = {title: req.body.title, overview:req.body.overview};
    console.log(movieInfo);
    try{
    const dbs = movieInfoModel.db;
    const coll = dbs.collection("moviecollection");

    const rest = await coll.insertOne(movieInfo);
    console.log("data saved");
    res.status(200).json({message_success:"Data saved successfully"});

    }catch(ex){
        console.log("Error " + ex);
    }
   
}