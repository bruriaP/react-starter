/***************************************************************************
 *                              authentication controller                  *
 ***************************************************************************/

const db = require('../db');
const bcrypt = require('bcryptjs');
// const mongoDB = require('mongodb');
// const jwt = require('jsonwebtoken');
// const ObjectID = mongoDB.ObjectID;
// const TOKEN_SECRET = process.env.JWT_KEY;

/**
 * add new user
 */
exports.addNewUser = (req, res, next) => {
    // before adding new user check if user exist
    db.getDb()
        .collection('users')
        .findOne({
            userName: req.body.userName
        })
        .then(user => {
            // user name taken
            if (user) {
                res.status(200).json({
                    ans: 'user name taken',
                    result: {
                        n: 0
                    }
                });
                return;
            }
            // hash user password
            bcrypt.hash(req.body.password, 10)
                .then(hashPassword => {
                    const user = req.body;
                    user.password = hashPassword;

                    db.getDb()
                        .collection('users')
                        .insertOne(user)
                        .then(result => {
                            res.status(200).json({
                                ans: 'add new user',
                                result: result,
                            });
                        })
                        .catch(error => {
                            res.status(500).json({
                                message: 'Add auth user error occurred',
                                error: error
                            });
                        });
                });
        });
}