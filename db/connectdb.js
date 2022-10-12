import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
    try{
        const DB_OPTIONS = {
            dbName: 'blogdb',
        }
        await mongoose.connect("mongodb+srv://srdec81:Sri123a@joinpath-cluster.ksxhe.mongodb.net/"+"HubliTeamV1"+"?retryWrites=true&w=majority",  {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log('Connected Successfully..');
    } catch (err){
        console.log(err);
    }
}

export default connectDB