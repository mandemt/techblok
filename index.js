console.log('hallo world')

const express = require('express');
const app = express();
const port = 300;

app.get('/', (req, res) => {
	res.send('test 1234 test')
});

app.listen(port, () => {
	console.log('de app luistert op localhost:${port}')
})
