console.log('hallo world')

const express = require('express'); // express wordt gebruikt
const app = express(); 
const port = 4000; // met localhost:3000 bezoek je de server in de browser

var bodyParser = require('body-parser') // het package bodyParser wordt gebruikt om het verwerken van data uit een request makkelijker te maken

app.set('view engine', 'pug') // instellen voor view engine

app.use(express.static('static')) // nu worden er static files opgevraagd vanuit een nadere map.


const gebruikers = [
	{"id": "mandemt", "gebruikersnaam": "mandemt", "interesses": ["vissen", "hakken", "zingen"]},
	{"id": "hans", "gebruikersnaam": "hans", "interesses": ["bakken", "braden", "hakken"]},
	{"id": "piet", "gebruikersnaam": "piet", "interesses": ["bakken", "zingen", "vissen"]},
	{"id": "admin", "gebruikersnaam": "admin", "interesses": ["zingen"]},
	
];

app.use(bodyParser.urlencoded({extended:false}))




app.get('/toevoegen', (req, res)=>{
	res.render('dynamic');
	
})



app.post('/add', (req, res,)=>{
	
	const id = (req.body.name)
	const gebruiker = {id: id, gebruikersnaam: req.body.naam, interesse: req.body.interesse};
	const intrest = req.body.interesse;
	const naam = req.body.naam;
	console.log(naam);
	console.log(req.body.interesse);
	res.render('dynamic', {intrest, naam});
	gebruikers.push(gebruiker)
	
	
})
app.get('/', (req,res) => {
	res.render('index', {title: 'MagnetMatch'})
})

app.get('/inloggen.html', (req,res) => {
	res.render('inloggen', {title: 'Inloggen'})
})

app.get('/interesses.html', (req,res) => {
	res.render('interesses', {title: 'Interesses'})
})

app.post('/resultaten.html', (req,res) => {
	res.render('resultaten', {title: 'Interesses'});
	const intrest = req.body.intrest;
	console.log(intrest);
})

app.get('/persoon.html', (req,res) => {
	res.render('persoon', {title: 'Interesses'})
})

app.get('/opgeslagen.html', (req,res) => {
	res.render('opgeslagen', {title: 'Interesses'})
})











app.listen(port, () =>{
	console.log('de app lusitert op localhost:4000')
})

app.use(function(req,res,next){
	res.status(404);
	res.send('<h1>Gebruik een andere link!!!</h1>')
})


// nu de dynamic data





