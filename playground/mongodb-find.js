const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return  console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB");

  // db.collection("Todos").find({
  //   _id: new ObjectID('5abbd18ed526d8718b724d5f')
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=>{
  //   console.log("Unable to fetch todos", err);
  // });

  // db.collection("Todos").find({
  //   _id: new ObjectID('5abbd18ed526d8718b724d5f')
  // }).count().then((count ) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err)=>{
  //   console.log("Unable to fetch todos", err);
  // });

  db.collection("Users").find({
    name: "Daulet"
  }).toArray().then((docs) => {
    console.log("Users:");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log("Unable to fetch docs", err);
  });

  //db.close();
});
