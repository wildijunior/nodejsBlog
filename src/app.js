import customExpress from "./config/server.js";

const app = customExpress();
let port = process.env.PORT;

if (port == null || port == "") {
  port = 3333;
}

app.listen(port, () => console.log(`Server listening on ${port}`));
