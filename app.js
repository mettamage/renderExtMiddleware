let express = require('express');
let app = express();
let renderExtMiddleware = require('./my_modules/renderExtMiddleware');

const person = {name: "John" , age: 21};

//middleware stack is being determined in order like this due to it being processed
//top to bottom and placed on a stack (I think??... I think so...).
app.use(renderExtMiddleware);

app.get( '/test', (req, res) => {
	res.render('renderme', person);
});

app.set('views', './');
app.set('view engine', 'pug');

//e.g. it wouldn't work if app.use(renderExtMiddleWare) would be used here.

app.listen(3001, function(){
	console.log("The blog app is listening on port ", 3001);
});