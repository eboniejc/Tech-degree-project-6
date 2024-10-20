const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.get('/', (req, res) => {
    res.render('index', { projects: data.projects });

});

//test for error page
// router.get('/trigger-error', (req, res, next) => {
//     const err = new Error('Something went wrong!');
//     err.status = 500;
//     next(err); // Pass the error to the global error handler
// });


module.exports = router;