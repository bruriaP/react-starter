/***************************************************************************
 *                              Initialize MongoDB                         *
 ***************************************************************************/

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const userName = process.env.MONGODB_USER_NAME;
const password = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_NAME;
const dbServer = process.env.MONGODB_SERVER;

const MONGODB_URL =
    `mongodb://${userName}:${password}@${dbServer}/${dbName}?retryWrites=true`;
let _db;


const initDb = callback => {

    if (_db) {
        console.log('Database is already initialize! ');
        return callback(null, _db);
    }

    MongoClient.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(client => {
            _db = client.db('tasksDB');
            callback(null, _db);
        }).catch(error => {
            callback(error);
        })
};

const getDb = () => {
    if (!_db) {
        throw Error('Database Not initialized run initDb first!')
    }
    return _db;
};

module.exports = {
    initDb,
    getDb
};