const axios = require("axios");
const request = require("request");
const sa = require("superagent");

//* 1. axios
axios
  .get("https://api.fbi.gov/wanted/v1/list")
  .then((res) => console.log(res.data.items[0].title))
  .catch((err) => console.log(err));

//* 2. request
request(
  { url: "https://api.fbi.gov/wanted/v1/list", json: true },
  (err, res) => {
    if (err) console.log(err);
    else console.log(res.body.items[0].title);
  }
);

//* 3. superagent
sa.get("https://api.fbi.gov/wanted/v1/list")
  .then((res) => console.log(res.body.items[0].title))
  .catch((err) => console.log(err));
