import express from 'express'
import connectDB from './db/connectdb.js'
import web from './routes/web.js'

const app = express()
const port = process.env.PORT || '3000'
//const dbName= 'blogdb';
//const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"
//const DATABASE_URL = "mongodb+srv://srdec81:<password>@joinpath-cluster.ksxhe.mongodb.net/test";
//Database connection
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB()

//Set Template Enginer
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'views')));
//Load Routes
app.use('/', web)

app.listen(port,()=>{
    console.log('Server listening at http://localhost:${port}')
})