const express = require('express')
// const path = require('path');

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('./dist/'))

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`)
})
