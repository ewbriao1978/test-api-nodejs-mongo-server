import  { movieInfoModel }  from '../models/MovieInfoModel.js';
import { ObjectId } from 'mongodb'   



export const getMovieInfo = async(req,res) =>{
    console.log("sending data to client");
    let rest=null;
    try{
        const dbs = movieInfoModel.db;
        const coll = dbs.collection("moviecollection");

        //rest = await coll.find();
        let rest = await coll.find({}).toArray();
        res.json(rest);

        console.log("data sent");
        

    }catch(error){
        console.log("Error " + error);
        res.status(404).json({error: error.message});
    }
}



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


export const deleteMovieInfo = async(req,res) =>{
    
    let rest=null;
    const removeDataIndex =  req.params.id;
    console.log("removing data...:" + removeDataIndex);
    try{
        const dbs = movieInfoModel.db;
        const coll = dbs.collection("moviecollection");

       
        //deleteOne({_id: new mongodb.ObjectID('4d512b45cc9374271b00000f')});
        coll.deleteOne( {"_id": new ObjectId(removeDataIndex)});
        console.log("data "+ removeDataIndex+" removed");
        res.status(200).json({message_success:"Data removed successfully"});
        

    }catch(error){
        console.log("Error " + error);
        res.status(404).json({error: error.message});
    }
}




