const express = require("express");
const router = express.Router();
const middleware = require('./middleware');
const path = require("path");



router.get("/post", (req, res) => {
    res.send("post code improve")
})
router.get("/post/:id", (req, res) => {
    res.send("post code improve " + req.params.id)
})
router.get("/post/:fn-/:ln", (req, res) => {
    res.send("post code improve " + req.params.fn + " " + req.params.ln)
})

// only id pass in integer not string
router.get("/blog/:id(\\d+)", (req, res) => {
    res.send("post code improve " + req.params.id)
})

// regex pass in id
router.get("/profile/:id([0-9]{2})", (req, res) => {
    res.send("post code improve " + req.params.id)
})

// regex for keyword
router.get(/^\/(api|rest)\/.+$/, (req, res) => {
    res.send("Api Called")
})

// multiple url call
router.get(['/poster', '/posts', '/pp'], (req, res) => {
    res.send("post page api Called")
})

router.get("/blogger", middleware.blogMiddleware, (req, res) => {
    res.send("code improve")
})

router.get("/posted", middleware.postMiddleware, (req, res) => {
    res.send("code improve")
})


// call static file
router.get('/home', (req, res) => {
    let filePath = path.join(__dirname, '/home.html')
    res.sendFile(filePath)
})


// call dynamic file
router.get('/main', (req, res) => {
    let params = {
        name: 'Code improve',
        id: 2,
        blogs: [
            "Node", "Angular", "React", "PHP", "JAVA"
        ]
    }
    res.render('home', params)
})



module.exports = router
