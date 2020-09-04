const express = require('express');
const router = express.Router();

const post = require('./post.model')
// @route   Get api/
// @desc    Get all post
// @access  Public
router.get('/', async (req, res) => {
    try {
        let data = await post.find({})
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
})

// @route   Get api/new-post
// @desc    Get all post
// @access  Public
router.post('/new-post', (req, res) => {
    const { text } = req.body
    if(!text){
        res.json({ message: "Invalid"})
    }else{
        const PostS = new post({
            text
        })
       PostS.save().then(() =>{
        res.json({ msg: "Post Created" });
       }).catch((err) => {
        console.log(err);
      });
    }
})



module.exports = router