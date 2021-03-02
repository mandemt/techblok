console.log('hallo world')

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug') // instellen voor view engine

app.get('/', (req,res) =>{
	res.render('index', {title: 'Homgepage', message: 'Welkom bij de feature ' })//het respons bij het opvragen van de hoofdmap
})



app.get('/interesses', (req,res)=>{
	res.render('interesses',{
		title:'interesses',
		voorNaam,
		interesses})
})
//het respons bij het opvragen van de pagina waar je jouw interesses kan opgeven

app.get('/resultaten', (req,res)=> {  // het respons bij het opvragen van de resultatenlijst
	res.render('index', {title: 'Resultaten', message: 'Dit zijn mensen met de zelfde interesses' })
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

const voorNaam = ["Hans", "Tom", "Piet"]
const interesses = ["vissen", "gooien", "zagen"]

