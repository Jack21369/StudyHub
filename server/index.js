import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// Set up middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => {console.log('Connected to MongoDB')})
    .catch((error) => {console.error('Error connecting to MongoDB:', error)});


const port = process.env.PORT || 5000;
app.listen(port, () => {console.log(`Server listening on port ${port}`)});