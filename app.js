import express from "express";

const PORT = 8000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/csp-report" }));

app.all("/", (req, res) => {
  const { body, headers, params, url } = req;
  const response = { body, headers, params, url };
  console.log(response);
  res.status(200).send(response);
});

app.listen(PORT, async () => {
  console.log(`webhook running on port ${PORT}`);
});
