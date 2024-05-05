const express = require('express')
const app = express()
const cors = require('cors');


app.use(cors());
app.use(express.json())

require('./db/connection')
const Form = require('./Models/FormData')

app.post("/submit-form", async (req, res) => {
    let formData = new Form(req.body)
    let result = await formData.save()
    res.send(result)
})

app.listen(3001)