require("dotenv").config();

const Job = require("./models/Job");
const connectDB = require("./db/connect");
const mock_data = require("./mock_data.json");

async function populate() {
  try {
    console.log("connecting");
    await connectDB(process.env.MONGO_URI);
    console.log("connected");
    const jobs = await Job.create(mock_data);
    console.log("jobs created");
    console.log(jobs);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

populate();
