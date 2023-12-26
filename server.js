const app = require("./app");

const mongoos = require("mongoose");

// const DB_HOST =
//   "mongodb+srv://dmksdf:WZhyHWFV3fGa404K@cluster0.2affkfc.mongodb.net/db-contacts?retryWrites=true&w=majority";

const { DB_HOST, PORT = 3000 } = process.env;

mongoos.set("strictQuery", true);

mongoos
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connect success");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
