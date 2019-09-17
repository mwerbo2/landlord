const express = require("express");
const path = require("path");
const connection = require("./config/dbconfig");
const PORT = process.env.PORT || 5000;

const app = express();

// User Routes
app.use("/api/users", require("./routes/users"));

// Serves static react filse from the build folder
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
