require("dotenv").config(); // this line is mandatory when you want to read variables from the '.env' file
console.log(`The server will run on port ${process.env.SERVER_PORT}`);
console.log(
  `The secret key ${process.env.SECRET_API_KEY} will be used to connect to the third party API`
);
console.log(
  `The server will connect to the database with the user "${process.env.DB_USER}" and the password "${process.env.DB_PASSWORD}"`
);
console.log(
  `Hello my name is ${process.env.MY_NAME} and I live near ${process.env.MY_CITY} and I study ${process.env.MY_LANGUAGE}`
);

const http = require("http");

const host = "localhost";

const port = process.env.SERVER_PORT;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

server.listen(port);
