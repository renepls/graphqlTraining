import express from 'express';
import mongoose from 'mongoose';
import { makeExecutableSchema } from 'graphql-tools';
import { importSchema } from 'graphql-import';
import graphqlHTTP from 'express-graphql';
import resolvers from './resolvers';


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/graph', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log("Connected to server!"))
    .catch((err)=>console.log(err));


const app = express();
app.listen(8000, ()=>{
    console.log("Port: 8000");
});

const schema = makeExecutableSchema({
    typeDefs: importSchema('./schema.graphql'),
    resolvers
});

app.use('/graphql', graphqlHTTP(()=>({
    schema,
    graphiql: true,
    pretty: true
})));

app.get('/', (req, res)=>{
    res.send("Working...");
});