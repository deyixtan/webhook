import ngrok from "ngrok";
import nodemon from "nodemon";

const PORT = 8000;

(async () => {
  const url = await ngrok.connect({proto: "http", addr: PORT});
  console.log(`ngrok forwarding traffic from ${url}`);
  nodemon(`-x NGROK_URL=${url} node ./app.js`);
})();
