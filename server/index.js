const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/User');
const taskModel = require('./models/Task');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');


const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connected"))
    .catch((e) => {
        console.log(e);
    })


app.use('/', userRoutes);
app.use('/tasks', taskRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})