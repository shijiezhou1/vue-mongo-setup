const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// MIDDLE WARE  

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');
app.use('/api/posts/', posts);

// Handle production

if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));

    // Handle Single Page Application 

    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html')); // reference all   
}

const port = process.env.PORT || 5000; // LISTEN IN 500 PORT

app.listen(port, () => console.log(`Server started on port ${port}`));