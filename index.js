const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submit-form", (req, res) => {
  console.log("Received Data:", req.body);
  res.status(200).json({ message: "Form submitted successfully!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
