const mongoose = require('mongoose')

const Connetion = () => {
  mongoose.connect(`mongodb+srv://nivethikashivakumar56:ul5hZmKi0xMe7pnR@e-commercecluster.du0pux6.mongodb.net/?retryWrites=true&w=majority&appName=e-commerceCluster`)
    .then(() => {
      console.log('MongoDB is connected!');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
};

// const Connetion = async () => {
// try{
//   await mongoose.connect(`mongodb+srv://nivethikashivakumar56:ul5hZmKi0xMe7pnR@e-commercecluster.du0pux6.mongodb.net/?retryWrites=true&w=majority&appName=e-commerceCluster`);
//   console.log("database connected")

// }catch (error){
//  console.log("error", error)
// }
// }


module.exports = Connetion;


