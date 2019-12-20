const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/capcollector"
);

// content={[
//   (`Name: ${localStorage.getItem("visionBeerName")}`), 
//   (`Brewery: ${localStorage.getItem("visionBreweryName")}`), 
//   (`ABV: ${localStorage.getItem("visionBeerAbv")}%`), 
//   (`IBU: ${localStorage.getItem("visionBeerIbu")}`), 
//   (`Food Pairings: ${localStorage.getItem("visionBeerFoodPairings")}`), 
//   (`Organic: ${localStorage.getItem("visionBeerIsOrganic") === "Y" ? "Yes" : "No"}`), 
//   (`Description: ${localStorage.getItem("visionBeerShortDes")}`)
// ]}

const beerSeed = [
  {
    name: "Two Hearted Ale",
    brewery: "Bells",
    ABV: 7.0,
    IBU: 60.00,
    foodPairings: {
      "Savory": ["Oysters", "BBQ", "Brisket", "Cilantro"],
      "Sweet":  ["Apples", "Grapefruit", "Carrot Cake", "Caramel"]
    },
    organic: false,
    description: "American IPA"
  }
];

const userSeed = [
{
  username: "renns",
  password: "123123",
  name: "Tom Rennhack",
  email: "tomrennhack@gmail.com",
  birthdate: "1988-02-08",
  favoriteBeerType: "IPA"
}
];

db.Beer
  .remove({})
  .then(() => db.Beer.collection.insertMany(beerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


db.User
.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});