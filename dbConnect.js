const mongoose = require("mongoose");
const path = require("path");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://twinkle1:rHQBJyN6UfwRNciu@cluster0.mnm2ohd.mongodb.net/?retryWrites=true&w=majority";

  try {
    const connect = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
