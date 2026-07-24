import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Example route
app.get("/api/users", (req, res) => {
  res.json([{ name: "Ankita" }, { name: "Rahul" }]);
});

app.listen(5000, () => console.log("Server running on port 5000"));
