import express from "express";
import { WebSocketServer } from "ws";
import { HTTP_PORT, WS_PORT } from "./config.js";

const app = express();
const wsServer = new WebSocketServer({ port: WS_PORT });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/csp-report" }));

app.all("/", (req, res) => {
  const { body, headers, params, url } = req;
  const response = { body, headers, params, url };
  console.log(response);
  wsServer.clients.forEach((client) => client.send(JSON.stringify(response)));
  res.status(200).send(response);
});

app.listen(HTTP_PORT, () => {
  console.log(
    `webhook running on port ${HTTP_PORT} (HTTP) and ${WS_PORT} (WS)`
  );
});
