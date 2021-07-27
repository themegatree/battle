const express = require('express')
const app = express()
const port = 3000

//viewengine
app.set('viewengine','ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
