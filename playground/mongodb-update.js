const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return  console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB");

  // db.collection("Todos").findOneAndUpdate({
  //   _id: new ObjectID("5abbe001f4b3d0a83274b063")
  // },{
  //   $set: {
  //     completd: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((res) => console.log(res));

  db.collection("Users").findOneAndUpdate({
    name: "Dias"
  }, {
    $inc: {
      age: 20
    }
  }, {
      returnOriginal: false
    }).then((res) => console.log(res));



  //db.close();
});
