const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authUser')

const app = express();

/**
 * Set access control
 */
app.use((req, res, next) => {
    // to allow access from any domain
    res.setHeader('Access-Control-Allow-Origin', '*');

    // allow access to methods
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, PUT, OPTIONS'
    );

    // allow set Content-Type, Authorization, Origin, X-Requested-With, Accept  in client side
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, Origin, X-Requested-With, Accept'
    );

    next();
});

/**
 * set JSON body parser
 */
app.use(bodyParser.json());

/**
 * Express routes
 */
app.use('/api/auth', authRoutes);

/**
 * MongoDB initialization 
 */
db.initDb((error, db) => {
    if (error) {
        console.log('MongoDB Connection Error: ', error);
    } else {
        console.log('*** Connect to Mongo DB ***');
    }
});

module.exports = app;