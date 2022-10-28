require("dotenv").config();

const express = require("express");
const { MikiApiClient } = require("@mikibot/api");

const redirectUri = process.env.REDIRECT_URI || "http://localhost:3000/";
const clientId = process.env.CLIENT_ID;

const apiClient = new MikiApiClient(process.env.MIKI_TOKEN);

const app = express();

app.get("/", async (req, res) => {
  if (!req.query["code"]) {
    return res.redirect(`https://miki.bot/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=experience.manage`);
  }

  const response = await apiClient.verifyGrant(clientId, req.query["code"]);
  if (!response) {
    return res.status(401).send("Verification failed");
  }

  const { authorized, guild } = response;
  if (!authorized) {
    return res.status(401).send("This server was not authorized yet.");
  }

  const { id, name } = guild;
  return res.send(`Hello ${name}! Your ID is ${id}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});