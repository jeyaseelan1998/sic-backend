const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 1212;

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);

app.post("/calculate", (req, res) => {
  const { principal, time, interest} = req.body;

  if (
    principal < 0 ||
    time < 0 ||
    interest < 0 ||
    isNaN(principal) ||
    isNaN(time) ||
    isNaN(interest)
  ) {
    return res.status(400).send({ error: "All fields are required" });
  }
  const simpleInterest = (principal * time * interest) / 100;
  res.send({ simpleInterest });
});
