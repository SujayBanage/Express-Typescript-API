import mongoose from "mongoose";
import config from "config";

async function connect() {
  const MONGO_URI = config.get<string>("MONGO_URI");
  return await mongoose.connect(MONGO_URI);
}

export default connect;
