const express = require('express')
const app = express()
const port = 3000

//routers
const indexRouter = require('./routes/index.js');
const battleRouter = require('./routes/battle.js');
const battleAttackRouter = require('./routes/battle-attack.js');
const resultsRouter = require('./routes/results.js');


//viewengine
app.set('viewengine','ejs');
app.use(express.urlencoded({extended: true}));

app.use('/', indexRouter);
app.use('/battle', battleRouter);
app.use('/battle-attack', battleAttackRouter);
app.use('/results', resultsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})