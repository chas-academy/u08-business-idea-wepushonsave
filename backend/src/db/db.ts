import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI: string = "mongodb://localhost:27017/MTGVault";
    await connect(mongoURI);
    console.log("MongoDB Connected...");
  } catch (err: any) {
    console.error(err.message);
    console.log("Connection failed");
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB();
