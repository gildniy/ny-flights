const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/index.html"));
});
app.listen(port, () => {
  console.log(`App listening to ${port}....`);
  console.log('Press Ctrl+C to quit.');
});
