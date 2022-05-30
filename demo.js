const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://dbuser:Password.mongodb.123@cluster0.dsmnm.mongodb.net/test";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    await listDatabases(client);
  } catch (error) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  const databaseList = await client.db().admin().listDatabases();
  console.log("Databases");
  databaseList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}
