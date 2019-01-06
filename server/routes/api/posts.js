const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
// ROUTER

// GET POST 
router.get('/', async (req, res) => {
    // res.send('hello');
    // console.log('start '+new Date().getMilliseconds());
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
    // console.log('end '+new Date().getMilliseconds());
});

// ADD POST
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
       text: req.body.text,
       createdAt: new Date()
    });
    res.status(201).send();
});


// DELETE POST 
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id) })
    res.status(200).send();
});

// UPDATE POST
async function loadPostsCollection() {
    // mlab.com 
    // const client = await mongodb.MongoClient.connect('mongodb://abc123:abc123@ds047207.mlab.com:47207/vue-mongodb', {
    //     useNewUrlParser: true
    // });
    // mongodb.com
    const client = await mongodb.MongoClient.connect('mongodb+srv://abc1234:abc1234@cluster0-7lnqj.mongodb.net/test?retryWrites=true', {
        useNewUrlParser: true
    });
    return client.db('vue-mongodb').collection('posts');
}

router.get('/about', async (req, res) => {
    const posts = await loadPostsCollection2(); 
    res.send(await posts.find({}).toArray());
});

async function loadPostsCollection2(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://abc1234:abc1234@cluster0-vmgmj.gcp.mongodb.net/test?retryWrites=true', {
        useNewUrlParser: true
    });
    return client.db('vue-mongodb').collection('posts');
}

module.exports = router;