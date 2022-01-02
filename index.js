const express = require('express')
const app = express()
const port = 2000
const yahooFinance = require('yahoo-finance');
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.set("json spaces", 2)
app.get('/test',(req,res) => {
	res.send('Test received and works!')
})
app.use(cors())
app.options('*', cors())
//getting stock based on the user inputted ticker
app.post('/current',(req,res) => {
	const ticker = req.body.ticker
	yahooFinance.quote({
		symbol: `${ticker}`,
	}, function(err,quote) {
		res.send(quote['price'])
	});
})

app.post('/history',(req,res) => {
	const date_to = new Date().toISOString().slice(0,10);
	const date2 = new Date()
	date2.setDate(date2.getDate() - 7);
	const date_from = date2.toISOString().slice(0,10);
	const ticker = req.body.ticker
	yahooFinance.historical({
		    symbol: `${ticker}`,
                    from: date_from,
		    to: date_to,
                    period: 'd',
         }, function(err,quote) {
                    res.send(quote);
           });
});

app.listen(port, () => {
	console.log(`Listening on port:${port}`)
})

