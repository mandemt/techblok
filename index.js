console.log('hallo world')

const PORT = process.env.PORT;


const express = require('express'); // express wordt gebruikt
const app = express(); 
const port = 4000; // met localhost:3000 bezoek je de server in de browser
const dotenv = require('dotenv').config();
const {MongoClient} = require('mongodb');
var bodyParser = require('body-parser') // het package bodyParser wordt gebruikt om het verwerken van data uit een request makkelijker te maken

let ejs = require('ejs');
app.set('view engine', 'ejs') // instellen voor view engine
// app.set('port', process.env.PORT || 4000)
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




app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req,res) => {
	res.render('index.html', {title: 'MagnetMatch'})
})


app.get('/toevoegen', (req,res) => {
	res.render('dynamic', {title: 'Inloggen'})
})

app.post('/nieuwprofiel', async (req, res,)=>{

	

	let gebruikers = {};
	gebruikers = await db.collection('gebruikers').find().toArray();

	const gebruiker = {id: req.body.naam, gebruikersnaam: req.body.naam, interesse: req.body.interesse}; 
	await db.collection('gebruikers').insertOne(gebruiker)
	
	const aantalMensen = gebruikers.length;
	console.log(aantalMensen)
	
	res.render('profiel', {gebruikers, gebruiker, aantalMensen});

})

app.get('/overzicht', async (req,res)=>{
	const gebruiker = {id: req.body.naam, gebruikersnaam: req.body.naam, interesse: req.body.interesse};
	
	let gebruikers = {}
	gebruikers = await db.collection('gebruikers').find().toArray();

	res.render('overzicht', {gebruikers, gebruiker})
	
})


app.post('/opslaan', async (req,res)=>{
	const gebruiker = {id: req.body.naam, gebruikersnaam: req.body.naam};
	
	let gebruikers = {}
	gebruikers = await db.collection('opgeslagen').find().toArray();
await db.collection('opgeslagen').insertOne(gebruiker)

	res.render('opgeslagen', {gebruikers, gebruiker})
	
});
app.get('/opgeslagen', async (req,res)=>{
	const gebruiker = {id: req.body.naam, gebruikersnaam: req.body.naam, interesse: req.body.interesse};
	
	let gebruikers = {}
	gebruikers = await db.collection('opgeslagen').find().toArray();



	res.render('opgeslagen', {gebruikers, gebruiker})
	
})
app.post('/verwijder', async (req,res)=>{
	const gebruiker = {id: req.body.naam, gebruikersnaam: req.body.naam};
	console.log(gebruiker)
	let gebruikers = {}
	gebruikers = await db.collection('opgeslagen').find().toArray();
await db.collection('opgeslagen').deleteOne(gebruiker)

	res.render('opgeslagen', {gebruikers, gebruiker})
})
app.get('/profiel/:gebruikersId', async (req, res) => {
	
	let gebruikers = {}
	
	gebruikers = await db.collection('gebruikers').find().toArray;
    const gebruiker = await db.collection('gebruikers').findOne({id: req.params.gebruikersId});
	const interesse = req.body.interesse;
	
    res.render('specifiek', {gebruikers, gebruiker});
	
		

});




// app.listen(PORT, () => {
// 	console.log(`Example app listening on port ${PORT}!`)
//   })

app.listen(port, () =>{
	console.log('de app lusitert op localhost:', port)
})

app.use(function(req,res){
	res.status(404);
	res.send('<h1>Gebruik een andere link!!!</h1>')
})















