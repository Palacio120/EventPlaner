import express from "express";
import {
  deleteSite,
  getSite,
  getSites,
  postSite,
} from "./Controlers/newSite.controller.js";
import("dotenv/config");
import("./DB/conectdb.js");

const app = express();
const PORT = 8000;

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

app.use(allowCrossDomain);
app.use(express.json());

app.post("/authenticate", (req, res) => {});

app.route("/locations").get(getSites).post(postSite);

app.route("/locations/:id").get(getSite).put().delete(deleteSite);

app.route("/events").get().post();

app
  .route("/events/:id")
  .get((req, res) => {
    res.json({ location: "test" });
  })
  .put()
  .delete();

app.listen(PORT, () => {
  console.log("app listening in port " + PORT);
});
