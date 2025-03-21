import mongoose from "mongoose";
const connectdb = async () => {
  mongoose.connection.on("connected", () => console.log("db connected"));
  await mongoose.connect(`${process.env.MONGO_URL}`);
};
export default connectdb