const { MongoClient } = require('mongodb');

const url = "mongodb+srv://shubham:shubhamhandsome@mycluster.81mip.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster"
const client = new MongoClient(url);


const dbName = 'FoodAppDB'

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);


    const collection = db.collection('Menu');


    const insertResult = await collection.insertMany([{"name" : "Shubham"}, {"age" : "32"}, {"okay" : "true"}]);
    console.log('Inserted documents =>', insertResult);
  
    // the following code examples can be pasted here...
  
    return 'done.';
  }


  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

