import ngrok from "ngrok";
import nodemon from "nodemon";
import { HTTP_PORT } from "./config.js";

(async () => {
  const url = await ngrok.connect({ proto: "http", addr: HTTP_PORT });
  console.log(`ngrok forwarding traffic from ${url}`);
  nodemon(`-x NGROK_URL=${url} node ./app.js`);
})();
