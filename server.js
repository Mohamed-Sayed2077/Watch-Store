var StaticServer = require("static-server");
var server = new StaticServer({
  rootPath: "./dist/",
  port: 8000,
});

server.start(() => {
  console.log("Server started at port ", server.port);
});
