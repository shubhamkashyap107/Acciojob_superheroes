const { MongoClient } = require('mongodb');
const url = "mongodb+srv://shubham:shubham123@cluster0.mufy0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(url);

const dbName = 'products';




async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('electronics');
    const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    console.log('Inserted documents =>', insertResult);
    // the following code examples can be pasted here...
  
    return 'done.';
  }
  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
