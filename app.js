const express = require('express');
const path = require('path');
const data = require('./data.json');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

const mainRoutes = require('./routes/index');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/projects')


app.use('/', mainRoutes); 
app.use('/about', aboutRoute);
app.use('/projects', projectRoute);

app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    console.log(`Error ${err.status}: ${err.message}`);//log error message for debugging(keep in)
    next(err);
});

//global error handler  
app.use((err, req, res, next) => {
    err.status = err.status || 500;
    err.message = err.message || 'Server Error';
    console.log(`Error ${err.status}: ${err.message}`);//log error message for debugging(keep in)
    //error page-not-found.pug
    if (err.status === 404) {
        res.status(404).render('page-not-found', { error: err });
    } else {
        // error.pug
        res.status(err.status).render('error', { error: err });
    }
});



app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});