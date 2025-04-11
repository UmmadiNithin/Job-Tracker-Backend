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
  origin: '*'
}));

app.use("/api/auth", authRoutes); 
app.use("/api/jobs", jobRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
