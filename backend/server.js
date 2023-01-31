const express = require('express')
const app = express()
const port = 5000;

app.get('/', (req, res) => res.send('Hello Word!'))
app.listen(port, () => console.log(`Server is Running on Port ${port}!`))