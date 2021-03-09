console.log('hallo world')

const express = require('express'); // express wordt gebruikt
const app = express(); 
const port = 4000; // met localhost:3000 bezoek je de server in de browser

var bodyParser = require('body-parser') // het package bodyParser wordt gebruikt om het verwerken van data uit een request makkelijker te maken

app.set('view engine', 'pug') // instellen voor view engine



const personen = [
	{"id": "mandemt", "gebruikersnaam": "mandemt", "interesses": ["vissen", "hakken", "zingen"]},
	{"id": "hans", "gebruikersnaam": "hans", "interesses": ["bakken", "braden", "hakken"]},
	{"id": "piet", "gebruikersnaam": "piet", "interesses": ["bakken", "zingen", "vissen"]},
	{"id": "admin", "gebruikersnaam": "admin", "interesses": ["zingen"]},
	
];


app.get('/', (req,res) => {
	res.render('index', {title: 'MagnetMatch'})
})

app.get('/inloggen', (req,res) => {
	res.render('inloggen', {title: 'Inloggen'})
})

app.get('/interesses', (req,res) => {
	res.render('interesses', {title: 'Interesses'})
})

app.get('/resultaten', (req,res) => {
	res.render('resultaten', {title: 'Interesses'})
})

app.get('/persoon', (req,res) => {
	res.render('persoon', {title: 'Interesses'})
})









app.use(express.static('public')) // nu worden er static files opgevraagd vanuit een nadere map.


app.listen(port, () =>{
	console.log('de app lusitert op localhost:4000')
})

app.use(function(req,res,next){
	res.status(404);
	res.send('<h1>Gebruik een andere link!!!</h1>')
})


// nu de dynamic data







