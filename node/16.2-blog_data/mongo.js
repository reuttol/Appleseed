const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url = "mongodb://localhost:27017/";

const users = [
  { name: "Timmy Hodadad", email: "timmy123@email.com" },
  { name: "Mordi Ben", email: "mordi@email.com" },
  { name: "Reut Farkash", email: "reut@email.com" },
];

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
  if (error) console.log(error);

  const db = client.db("blog");
  populateData(db);
});

const populateData = async (db) => {
  await db.collection("users")
    .insertMany(users)
    .then((result) => console.log(`Inserted ${result.insertedCount} user/s successfully`))
    .catch((error) => console.log(error));

  const timmy = await db.collection("users").findOne({ email: "timmy123@email.com" });
  const mordi = await db.collection("users").findOne({ email: "mordi@email.com" });

  const posts = [
    {
      title: "MongoDB Best Parctices",
      body: "lorem isum",
      authorID: timmy._id,
    },
    {
      title: "React Something",
      body: "lorem isum",
      authorID: mordi._id,
    },
  ];

  await db.collection("posts")
    .insertMany(posts)
    .then((result) => console.log(`Inserted ${result.insertedCount} post/s successfully`))
    .catch((error) => console.log(error));

  const timmyPost = await db.collection("posts").findOne({ authorID: timmy._id });

  db.collection("comments")
    .insertOne({
      postID: timmyPost._id,
      body: "Some random text",
      time: new Date(),
    })
    .then((result) => console.log(`Inserted ${result.insertedCount} comment/s successfully`))
    .catch((error) => console.log(error));
};
