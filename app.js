import express from "express";
import { WebSocketServer } from "ws";
import { HTTP_PORT, WS_PORT } from "./config.js";

const app = express();
const wsServer = new WebSocketServer({ port: WS_PORT });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/csp-report" }));

app.all("/*", (req, res) => {
  const { httpVersion, url, method, headers, query, body } = req;
  const requestObject = {
    httpVersion,
    url,
    method,
    headers,
    query,
    body,
  };
  const serialisedRequest = JSON.stringify(requestObject);

  wsServer.clients.forEach((client) => client.send(serialisedRequest));
  res.set("Content-Type", "application/json");
  res.status(200).send(serialisedRequest);
});

app.listen(HTTP_PORT, () => {
  console.log(
    `webhook running on port ${HTTP_PORT} (HTTP) and ${WS_PORT} (WS)`
  );
});
