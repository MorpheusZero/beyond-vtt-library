import { MongoClient } from "mongodb";
import { singleton } from "tsyringe";

@singleton()
export class Database {
  public DBConnection: MongoClient;

  constructor() {
    const uri = process.env.MONGODB;
    if (!uri) {
      throw new Error("No DB Connection String Detected!");
    }
    console.log("Connecting...");
    this.DBConnection = new MongoClient(uri);
  }

  public async InitializeDBConnection() {
    try {
      // Connect to the MongoDB cluster
      await this.DBConnection.connect();
      console.log("Connected...");
    } catch (error) {
      console.error(error);
    }
  }
}
