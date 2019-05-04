console.log('app.js');

var express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Express backend running on React'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));