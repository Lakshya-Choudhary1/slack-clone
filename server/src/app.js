import express from "express";

import path from "path";
import url from "url";

const app = express();

const __filepath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filepath);

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname,
     ".." , "public", "index.html"));
});

export default app;
