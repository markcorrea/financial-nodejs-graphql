import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

import schema from './graphql';

const app = express();

mongoose.connect('mongodb://mrccorrea:Markpass87@ds135433.mlab.com:35433/financial');
const db = mongoose.connection;
db.on('error', () => console.log('Failed to connect to database'))
	.once('open', () => console.log('Connected to DB.'));

app.get('/', (req, res) => {
	res.send('Hello world, this is graphql api.');
});

app.use('/graphql', graphqlHTTP(() => ({
	schema,
	graphiql: true,
	preety: true
})));

app.listen(3000, () => {
	console.log('Graphql API Running at port 3000');
});