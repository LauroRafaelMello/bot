var express = require('express')
var router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
    res.status(200).json({status:"OK", message:"Successful connection ✅"})
})

router.post('/send', (req, res) => {
    let text = req.body
    console.log("Received: ", text)
    res.status(200).json({status:"OK", message:"Text sent successfully ✅"})
})

module.exports = router