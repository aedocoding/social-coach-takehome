const express = require("express");
const CORS = require("cors");
var Twitter = require("twitter");
require("dotenv/config");
var client = new Twitter({
  consumer_key: process.env.apikey,
  consumer_secret: process.env.secret,
  access_token_key: process.env.accesskey,
  access_token_secret: process.env.accesstoken,
});

const server = express();

server.use(CORS());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});
server.get("/hashtags", (req, res) => {
  var params = { screen_name: req.body["search_term"] };
  client.get(
    "statuses/user_timeline",
    params,
    function (error, tweets, response) {
      if (!error) {
        let returning = [];
        for (let i = 0; i < tweets.length; i++) {
          let hashtags = tweets[i]["entities"]["hashtags"];
          for (let j = 0; j < hashtags.length; j++) {
            returning.push(hashtags[j]["text"]);
          }
        }
        res.status(200).json({ message: returning });
      }
    }
  );
});
server.get("/mentions", (req, res) => {
  var params = { q: req.body["search_term"], result_type: "recent" };
  client.get("search/tweets", params, function (error, tweetdata, response) {
    if (!error) {
      let returning = [];
      for (let i = 0; i < 5; i++) {
        returning.push(tweetdata["statuses"][i]['text']);
      }
      res.status(200).json({ message: returning });
    }
  });
});

module.exports = server;
