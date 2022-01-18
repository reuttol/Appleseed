//* 1.1 - Write a MongoDb query to display all the documents in the restaurant collection
db.restaurants.find().pretty()

//* 1.2 - Write a MongoDb query to display all restaurants that have a specifc cuisine
db.restaurants.find({cuisine: "asian"}).pretty()

//* 1.3 - Write a MongoDb query that displays only kosher restaurants
db.restaurants.find({kosher : true}).pretty()

//* 1.4 - Write a MongoDb query that displays only a specifc cities restaurants
db.restaurants.find({"address.city" : 'Tel Aviv'}).pretty()

//*1.5 - Write a MongoDb query to display a specifc restaurants address
db.restaurants.find({"address.street" : 'Stam Adress 15'}).pretty()

//*1.6 - Write a MongoDb query to display a specifc restaurants coordinates
db.restaurants.find({"address.coordinates" : [20.46574, -40.6774]}).pretty()

//* 1.7. - Write a MongoDb query that should display all restaurants in ascending order by restaurant name.
db.restaurants.find().sort({name: 1})

//* 1.8 - Write a MongoDb query that should display all restaurants in ascending order by city names.
db.restaurants.find().sort({"address.city": 1})

//* 1.9 - Update a specifc restaurant's name
db.restaurants.updateOne({_id: ObjectId("61e54f91ef31d4127cc38069")}, {$set: {name: "Reut's Restaurant"}})

//* 1.10 - Update a specifc restaurant by adding a new review.
db.restaurants.updateOne({_id: ObjectId("61e54f91ef31d4127cc38069")}, {$push: {reviews: {date: new Date(), score: 10}}})

//* 1.11 - Update all restaurants to be kosher
db.restaurants.updateMany({kosher: false}, {$set: {kosher: true}})

//* 1.12 - Delete a specifc restaurant
db.restaurants.deleteOne({_id: ObjectId("61e54f91ef31d4127cc38069")})

//* 1.13 - Delete all restaurants
db.restaurants.deleteMany({})


//* 2.1 - Write a MongoDb query to print all restaurant names.
db.restaurants.find().forEach((restaurant)=> { print("restaurant name: " + restaurant.name); })

//* 2.2 - Write a MongoDb query to print all restaurant cities
db.restaurants.find().forEach((restaurant)=> { print("restaurant city: " + restaurant.address.city); })

//* 2.3 - Write a MongoDb query to print all restaurant coordinates
db.restaurants.find().forEach((restaurant)=> { print("restaurant coordinates: " + restaurant.address.coordinates); })


//* 3.1 - Query for restaurant names that start with a specifc alphabet
db.restaurants.find({name: { '$regex': '^t', '$options': 'i' }})
db.restaurants.find({ name: /^t/i })

//* 3.2 - Query how many documents you have from the restaurant collection.
db.restaurants.find().count()

//* 3.3 - Write a MongoDb query to get restaurants that include reviews from a specifc date
db.restaurants.find({"reviews.date": new Date("2020-01-01")})


//* 4.1- Write a mongoDb query to display all restaurants average score.
db.restaurants.aggregate([ 
    { $project: { 
        averageScore: { "$avg": "$reviews.score" } 
    }}
]) 

//* 4.2 - Write a mongoDb query to display a specifc restaurant average score
db.restaurants.aggregate(
    {$match: {_id: ObjectId("61e54f91ef31d4127cc38069")}}
);

db.restaurants.aggregate([
    { $unwind: "$reviews" },
    { $match: { _id: ObjectId("61e54f91ef31d4127cc38069") } },
    {
      $group: {
        _id: "$_id",
        avgRating: { $avg: "$reviews.score" },
      },
    },
  ]);


