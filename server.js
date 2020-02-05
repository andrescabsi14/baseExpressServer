const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

class ApplicationServer {
  constructor() {
    //Express application object
    this.app = express();

    //Method that initialized the express framework.
    this.initExpress();

    //Method that initialized middleware modules
    this.initExpressMiddleWare();

    //Method that run the express application.
    this.start();
  }

  initExpress() {
    this.app.set("port", 8000);
  }

  initExpressMiddleWare() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(express.static(path.join(__dirname, "client/build")));
  }

  start() {
    let self = this;
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server Listening for port: ${self.app.get("port")}`);
    });
  }
}

new ApplicationServer();
