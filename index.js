const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/jobRoutes");
require('dotenv').config();




const app = express();
connectDB();

// app.use(cors());
app.use(express.json());
app.use(cors({
  origin: 'https://job-tracker-backend-2-8sat.onrender.com', // your frontend domain
  credentials: true, // if you're using cookies or auth headers
}));

app.use("/api/auth", authRoutes); 
app.use("/api/jobs", jobRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
