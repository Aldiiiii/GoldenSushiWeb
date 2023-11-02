const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("tralala ini dari client routes")
})

module.exports = router