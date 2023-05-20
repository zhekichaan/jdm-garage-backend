const mongoose = require("mongoose");

const app = require("./app");

const { HOST_DB, PORT } = process.env;
const connectionpOptions = {
  dbName: `jdm_garage`,
};
const main = async () => {
  try {
    if (!HOST_DB) {
      throw new Error("HOST_DB not set!");
    }

    await mongoose.connect(HOST_DB, connectionpOptions);
    console.log("Database connection successful");

    app.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Server is listening on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
};

main();
