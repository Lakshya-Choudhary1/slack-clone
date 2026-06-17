// import the built-in HTTP server creation function
import { createServer } from "http";

// import the Express application instance
import app from "./src/app.js";

// use the PORT environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// create an HTTP server using the app as the request handler
const server = createServer(app);

// start listening on the configured port and log a message once ready
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
