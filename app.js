import express from "express";
import { WebSocketServer } from "ws";
import { HTTP_PORT, WSS_PORT } from "./config.js";

const app = express();
const wss = new WebSocketServer({ port: WSS_PORT });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/csp-report" }));

app.all("/", (req, res) => {
  const { body, headers, params, url } = req;
  const response = { body, headers, params, url };
  console.log(response);
  wss.clients.forEach((client) => client.send(JSON.stringify(response)));
  res.status(200).send(response);
});

app.listen(HTTP_PORT, () => {
  console.log(
    `webhook running on port ${HTTP_PORT} (HTTP) and ${WSS_PORT} (WSS)`
  );
});
