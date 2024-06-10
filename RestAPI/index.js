import express from 'express';
import routes from './src/routes/route';
import mongoose from 'mongoose';
const app = express();
routes(app);
const PORT = 4000;
app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
)
app.listen(PORT, () =>
console.log(`Your server is running on port ${PORT}`))
// mongoose connection
mongoose.Promise = global.Promise;
mongoose.conncest('mongodb://localhost/restAPIdb',{
    userNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());