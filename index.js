const express = require("express");
const cors = require("cors");
const { connectToDB, client } = require("./database.js");  // Import both

const app = express();
app.use(cors());
app.use(express.json());

connectToDB();  // Connect to the database when the server starts

app.post('/submit-form', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await client.query("INSERT INTO contact (name, email, message) VALUES ($1, $2, $3)", [name, email, message]);

    const response = await client.query("SELECT * FROM contact");

    res.send(response.rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Oops! Error occurred." });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
