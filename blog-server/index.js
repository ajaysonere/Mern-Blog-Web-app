import express, { json, urlencoded } from 'express';
import cors from 'cors';
import 'dotenv/config';
import fileUpload from 'express-fileupload';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import  connection from "./config/dbconfig.js";
import postRouter from './Routes/postRoutes.js';
import userRouter from './Routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import HttpError from './models/errorModel.js';


const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(fileUpload());
app.use("/uploads" , express.static(__dirname + "/uploads"));

const PORT = process.env.PORT || 5001;

app.use('/api/users/' , userRouter);
app.use('/api/posts/' , postRouter);
app.use(notFound, errorHandler);
app.use(HttpError);


app.listen(PORT , () => {
   connection();
   console.log(`server is running at http://localhost:${PORT}`);
});