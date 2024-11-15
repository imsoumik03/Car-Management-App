const mongoose = require('mongoose');
const databaseUrl = process.env.DATABASE_URL;

const connecttodatabase = () => {
    mongoose
        .connect(databaseUrl)
        .then(() => {
            console.log('connected to database...');
        })
        .catch(e => {
            console.log(e);
        });
};

module.exports = connecttodatabase;
