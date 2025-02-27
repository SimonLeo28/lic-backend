const { Client } = require("pg");  // Fix: Use uppercase `Client`
require("dotenv").config();

const client = new Client({
  connectionString: process.env.POSTGRE_DB,
  ssl: { rejectUnauthorized: false }  // Required for cloud-hosted DBs like NeonDB
});

async function connectToDB() {
  try {
    await client.connect();
    console.log("Connected to database.");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

// Export both `connectToDB` and `client`
module.exports = { connectToDB, client };
