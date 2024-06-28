const { default: mongoose } = require("mongoose");

const connection = {};

export const connectToDatabase = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    await mongoose.connect(process.env.MONGO);
    connection.isConnected = mongoose.connection[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to database");
  }
};
