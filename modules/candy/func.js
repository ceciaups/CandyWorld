const { MongoClient, ObjectId } = require("mongodb");

//Mongo stuff
const dbUrl = "mongodb+srv://adminUser:jMy608FG5Lmlb3hV@cluster0.kycyh0g.mongodb.net/candyworld?retryWrites=true&w=majority";
const client = new MongoClient(dbUrl);

//MONGO FUNCTIONS
async function connection() {
  await client.connect();
  db = client.db("candyworld"); //select candyworld database
  return db;
}
/* Async function to retrieve all candies documents from candy collection. */
async function getCandies() {
  db = await connection(); //await result of connection() and store the returned db
  var results = db.collection("candy").find({}); //{} as the query means no filter, so select all
  res = await results.toArray();
  return res;
}
/* Async function to insert one document into candy. */
async function addCandy(candy) {
  db = await connection();
  let status = await db.collection("candy").insertOne(candy);
  console.log("candy added");
}
/* Async function to delete one document by _id. */
async function deleteCandy(id) {
  db = await connection();
  const deleteIdFilter = { _id: new ObjectId(id) };
  const result = await db.collection("candy").deleteOne(deleteIdFilter);
  if (result.deletedCount === 1)
    console.log("delete successful");
}
/* Async function to select one document by _id. */
async function getSingleCandy(id) {
  db = await connection();
  const editIdFilter = { _id: new ObjectId(id) };
  const result = db.collection("candy").findOne(editIdFilter);
  return result;
}
/* Async function to edit one document. */
async function editCandy(filter, candy) {
  db = await connection();
  let idFilter = { _id: new ObjectId(filter) };
  const updateCandy = {
    $set: candy
  }
  const result = await db.collection("candy").updateOne(idFilter, updateCandy);
  console.log("candy updated");
}

module.exports = {
  getCandies,
  addCandy,
  deleteCandy,
  getSingleCandy,
  editCandy
};