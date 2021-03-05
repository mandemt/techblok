console.log('hallo world')

const express = require('express'); // express wordt gebruikt
const app = express(); 
const port = 3000; // met localhost:3000 bezoek je de server in de browser
var bodyParser = require('body-parser') // het package bodyParser wordt gebruikt om het verwerken van data uit een request makkelijker te maken



const voorNaam = ["Hans", "Tom", "Piet"]
const interesses = ["vissen", "gooien", "zagen"]
app.set('view engine', 'pug') // instellen voor view engine

app.get('/', (req,res) =>{
	res.render('index', {title: 'Homgepage', message: 'Welkom bij de feature ' }) //het respons bij het opvragen van de hoofdmap
})








app.use(bodyParser.urlencoded({ extended: false }))



app.get('/inloggen', (req,res) => {

	res.render('inloggen', {title:"account toevoegen"})
})

app.get('/inloggen/add.html', (req,res) => {
	console.log('nu toevoegen')
	res.render('index' , {title:"add"})
})



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
	console.log('de app lusitert op localhost:3000')
})

app.use(function(req,res,next){
	res.status(404);
	res.send('<h1>Gebruik een andere link!!!</h1>')
})


// nu de dynamic data



