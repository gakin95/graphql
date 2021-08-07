const express = require('express');
const mongoose = require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');

const mongoUri = "mongodb+srv://gakin95:googleman@cluster0.12z9j.azure.mongodb.net/test";

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database");
});

const app = express();

app.use('/graphql', graphqlHTTP({schema: schema, graphiql: true}));

app.listen(4000, () => console.log('listening on port 4000'))
