const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const multer = require("multer");

const exphbs = require("express-handlebars");

//setting
app.set("port", process.env.PORT || 3000);

//hbl
app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    LayoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
  })
);

app.set("view engine", ".hbs");

//middlewares

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  multer({
    dest: path.join(__dirname, "public/uploads")
  }).single("image")
);

//routes
app.use("/", require("./routes/index"));
app.use("/", require("./routes/ruta"));
app.use("/", require("./routes/form"));

app.post("/uploads", (req, res) => {
  console.log(req.file);
  res.send("Subido");
});

//static file
app.use("public", express.static(path.join(__dirname, "./public")));

app.listen(app.get("port"), () => {
  console.log(`server on port${app.get("port")}`);
});
