import mongoose from "mongoose";

const DBConnection = async () => {
    const MONGODB_URI = `mongodb://tanyaGup:codefortg@file-sharing-shard-00-00.mo9ed.mongodb.net:27017,file-sharing-shard-00-01.mo9ed.mongodb.net:27017,file-sharing-shard-00-02.mo9ed.mongodb.net:27017/?ssl=true&replicaSet=atlas-24hxj1-shard-0&authSource=admin&retryWrites=true&w=majority&appName=file-sharing`;

   
      
    
    try{
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true});
        console.log('database connected successfully');

    } catch (error) {
        console.log('error while connecting with the databse', error.message);
    } 
}

export default DBConnection;