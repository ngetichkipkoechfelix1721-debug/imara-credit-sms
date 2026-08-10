import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Imara Credit Pesapal Server is running!");
});

// Check if Pesapal keys are loaded (without showing them)
app.get("/config-check", (req, res) => {
  res.json({
    consumerKeyLoaded: !!process.env.PESAPAL_CONSUMER_KEY,
    consumerSecretLoaded: !!process.env.PESAPAL_CONSUMER_SECRET,
    environment: process.env.PESAPAL_ENVIRONMENT
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
