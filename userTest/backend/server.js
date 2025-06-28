const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./utils/DB/DbConnect");
const User = require("./models/userModel");
const userRouter = require("./routes/userRoute");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT;

// Routing

app.get("/", (req, res) => {
  const htmlFile = path.join(__dirname, "..", "frontend", "login.html");
  res.sendFile(htmlFile);
});

app.use("/user", userRouter);

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is running on the Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
