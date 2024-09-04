import http from 'http'
import express from 'express'
import { mongoDBConnection } from '../database/connection.js';
import routes from './routes/index.js';
import cors from 'cors';

const app = express();

const server = http.createServer(app);
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/',routes);

mongoDBConnection();

const port = process.env.PORT;
server.listen(port,(error)=>{
    if(error){
        console.log("error occured",error.message.toString())       
    }
    else{
        console.log("Server Started at Port -",port)        
    }
});