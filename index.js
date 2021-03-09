console.log('hallo world')

const express = require('express'); // express wordt gebruikt
const app = express(); 
const port = 4000; // met localhost:3000 bezoek je de server in de browser



const personen = [
	{"id": "mandemt", "gebruikersnaam": "mandemt", "interesses": ["vissen", "hakken", "zingen"]},
	{"id": "hans", "gebruikersnaam": "hans", "interesses": ["bakken", "braden", "hakken"]},
	{"id": "piet", "gebruikersnaam": "piet", "interesses": ["bakken", "zingen", "vissen"]},
	{"id": "admin", "gebruikersnaam": "admin", "interesses": ["zingen"]},
	



];
var bodyParser = require('body-parser') // het package bodyParser wordt gebruikt om het verwerken van data uit een request makkelijker te maken

app.get('/addpersoon', (req,res) =>{
	console.log('add')
	res.render('index', {title:"persoon toevoegen"})
})

app.get('addpersoon.html', (req,res)=>{
	const movie = {name: req.body.gebruikersnaam, interesses: req.body.interesses};
	console.log(personen)
	res.render('interesses', {title: "toegevoegd",})
})

app.get('/personen', (req,res) => {
	res.render('index')
})


app.get('/personen/:personenId', (req, res) => {
	const personen = personen.find (personen => personen.id == req.params.personenId);
	res.render('index', {title: "persoon", personen})
	console.log('personenId')
})

app.set('view engine', 'pug') // instellen voor view engine





app.get('/inloggen', (req,res) => {

	res.render('inloggen', {title:"account toevoegen"})
})






app.use(bodyParser.urlencoded({ extended: false }))







app.get('/interesses', (req,res)=>{
	res.render('interesses',{
		title:'interesses',
		voorNaam,
		interesses})
})
//het respons bij het opvragen van de pagina waar je jouw interesses kan opgeven

app.get('/resultaten', (req,res)=> {  // het respons bij het opvragen van de resultatenlijst
	res.render('index', {title: 'Resultaten', message: 'Dit zijn mensen met de zelfde interesses'})
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


app.get('/', (req,res) => {
	res.render('index', {title: 'MagnetMatch'})
})

app.get('/inloggen', (req,res) => {
	res.render('inloggen', {title: 'Inloggen'})
})

app.get('/interesses', (req,res) => {
	res.render('interesses', {title: 'Interesses'})
})



