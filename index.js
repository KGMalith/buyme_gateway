//Import .env package
require('dotenv').config();
//Initialize express
let express = require('express');
let app = express();
//Import CORS
let cors = require('cors');
//Import Main Routes File
let Routes = require('./routes');

//make app use json
app.use(express.json());

//import whitelist origins
const whitelist = process.env.WHITE_LISTED_DOMAINS;

//check cors requests
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(null, true);
        }
    }
};

app.use('/api', cors(corsOptions), Routes);

//Import Port Number
const PORT = process.env.APP_PORT;

app.listen(PORT, () => console.log('server is running on port:' + PORT));

