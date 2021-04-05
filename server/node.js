const MongoClient = require('mongodb');
const MONGODB_URI = 'mongodb+srv://theoplpp:968574123@clearfashioncluster.yqjmm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'clearfashion';

async function test(){
	const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
	const db =  client.db(MONGODB_DB_NAME);
}
test();
