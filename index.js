console.log('hallo world')

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('test 1234 test')
});

app.listen(port,() => {
	console.log('de app luistert op poort port')
})

app.use(function (req,res,next){
	res.status(404).send('Kan niet vinden!!!!!!!')
})
app.listen(3000);


module.exports = router;