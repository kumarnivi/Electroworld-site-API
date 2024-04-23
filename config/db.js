const mongoose = require('mongoose');

// const connectDb = () => {
//   mongoose.connect(`mongodb+srv://nivethikashivakumar56:root0@e-commercecluster.du0pux6.mongodb.net/`)
//     .then(() => {
//       console.log('MongoDB is connected!');
//     })
//     .catch((error) => {
//       console.error('Error connecting to MongoDB:', error);
//     });
// };

const Connetion = async () => {
try{
  await mongoose.connect(`mongodb+srv://nivethikashivakumar56:W6CsFQLPu0RLcQVo@e-commercecluster.du0pux6.mongodb.net/`);
  console.log("database connected")

}catch (error){
 console.log("error", error)
}
}


module.exports = Connetion;


