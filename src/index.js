const express = require('express');
const routes = require('./routes');

const app = express();

require('./database');

app.use(routes.indexRouter);

app.set('port', 3000);

app.listen(app.get('port'), () => {
  console.log(`Listenning server on port ${app.get('port')}`);
})