const express = require('express');
const mongodb = require('mongodb');
const secondRouter = express.Router();

// GET POST 
secondRouter.get('/', async (req, res) => {
    const posts = await loadPostsCollection();   
    res.send(await posts.find({}).toArray());
});


secondRouter.get('/about', function (req, res) {
    console.log('about open');
    const posts = await loadPostsCollection(); 
    res.send(await posts.find({}).toArray());
})

// ADD POST
secondRouter.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
       text: req.body.text,
       createdAt: new Date()
    });
    res.status(201).send();
});

// DELETE POST 
secondRouter.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id) })
    res.status(200).send();
});

// UPDATE POST
async function loadPostsCollection() {
    // GOOGLE CONNECT
    const client = await mongodb.MongoClient.connect('mongodb+srv://abc1234:abc1234@cluster0-vmgmj.gcp.mongodb.net/test?retryWrites=true', {
        useNewUrlParser: true
    });
    return client.db('vue-mongodb').collection('posts');
}

module.exports = secondRouter;