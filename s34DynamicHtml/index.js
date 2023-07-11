const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    //by default res.render references our views directory as we defined our view engine in app.set as ejs, and by default it expects dir views in root
    res.render('home')
})

app.get('/random', (req, res) => {
    const thenumber = Math.floor((Math.random()) * 10)
    res.render('randomgen', { thisIsAvailableInTheTemplate: thenumber })

})


app.get('/r/:theThing', (req, res) => {
    const { theThing } = req.params;
    res.render('fileNameinEJS', { theThing });

})

app.listen(3000, () => {

    console.log("yo")
})

//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 