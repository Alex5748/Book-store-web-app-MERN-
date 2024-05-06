import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from './routes/booksRoutes.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();


//Middleware for prasing request body
app.use(express.json());

//Middleware for handling CORS Policy
// option 1: Allow  all origins with Defaults of cors(*)
//app.use(cors());

//option 2: Allow Custom Origins
// app.use(
//     cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to the MERN stack Tutorial");
});

app.use('/books', booksRoute)




mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App is connected to database');
        app.listen(PORT, ()=> {
            console.log(`App is listening on port: ${PORT}`);
            
        });
    
    })
    .catch((error) => {
        console.log(error);
    });


