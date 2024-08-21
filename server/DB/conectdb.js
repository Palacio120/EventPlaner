import mongoose from "mongoose";

async function conect() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("conectetd to MongoDB");
  } catch (error) {
    console.log("Conexion error:" + error);
  }
}

conect();
