console.log('hallo world')




const express = require('express'); // express wordt gebruikt
const app = express(); 
const port = 4000; // met localhost:3000 bezoek je de server in de browser
const dotenv = require('dotenv').config();
const {MongoClient} = require('mongodb');
var bodyParser = require('body-parser') // het package bodyParser wordt gebruikt om het verwerken van data uit een request makkelijker te maken

let ejs = require('ejs');
app.set('view engine', 'ejs') // instellen voor view engine

app.use(express.static('static')) // nu worden er static files opgevraagd vanuit een andere map.



let db = null
async function connectDB(){
const uri = process.env.DB_URI
const options = {useUnifiedTopology: true}
const client = new MongoClient(uri,options);
await client.connect(); // hierdoor worden geen andere taken uitgevoed totdat er verbonden is.
db = await client.db(process.env.DB_NAME)
}

connectDB()
	.then(() =>{
	console.log('gelukt om te verbinden met de database in .env bestand')
	})
	.catch(error =>{
		console.log(error)
	})

const gebruikers = [
	{"id": "mandemt", "gebruikersnaam": "mandemt", "interesse": ["vissen", "hakken", "zingen"]},
	{"id": "hans", "gebruikersnaam": "hans", "interesse": ["bakken", "braden", "hakken"]},
	{"id": "piet", "gebruikersnaam": "piet", "interesse": ["bakken", "zingen", "vissen"]},
	{"id": "admin", "gebruikersnaam": "admin", "interesse": ["zingen"]},
	
];



app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req,res) => {
	res.render('index.html', {title: 'MagnetMatch'})
})


app.get('/toevoegen', (req,res) => {
	res.render('dynamic', {title: 'Inloggen'})
})





app.post('/toevoegen/add', (req, res,)=>{

	const gebruiker = {id: req.body.naam, gebruikersnaam: req.body.naam, interesse: req.body.interesse};
	
	gebruikers.push(gebruiker);

	
	res.render('profiel', {gebruikers, gebruiker});

})


app.get('/toevoegen/:gebruikersId', (req, res) => {
	
	

	
    const gebruiker = gebruikers.find( gebruiker => gebruiker.id == req.params.gebruikersId);
	const interesse = req.body.interesse;
	console.log('gebruikers')
	
    res.render('profiel', { gebruiker, gebruikers});
	console.log(gebruiker)
	
		

});






app.listen(port, () =>{
	console.log('de app lusitert op localhost:', port)
})

app.use(function(req,res,next){
	res.status(404);
	res.send('<h1>Gebruik een andere link!!!</h1>')
})















