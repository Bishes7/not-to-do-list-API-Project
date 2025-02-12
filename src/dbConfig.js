import mongoose from "mongoose";

const mongoUrl = "mongodb://127.0.0.1:27017/online_ntdl";

export const connectMongoDb = async () => {
  try {
    const mongoConnect = await mongoose.connect(mongoUrl);
    mongoConnect && console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
