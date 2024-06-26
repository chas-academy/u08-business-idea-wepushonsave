/* eslint-disable  @typescript-eslint/no-explicit-any */
import { connect } from "mongoose";

import dotenv from "dotenv";

dotenv.config();
// Load environment variables from a .env file into process.env

const connectDB = async () => {
  try {
    const mongoURI: string =
      "mongodb+srv://admin:test1234@u08cluster.cootwbe.mongodb.net/?retryWrites=true&w=majority&appName=U08Cluster";
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