const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`DB HOST: ${connect.connection.host}, DB NAME: ${connect.connection.name}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

module.exports = connectDb;