const express = require("express") ;
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const routes = require("./controllers")

const PORT = process.env.PORT || 3000
const app = express();
;
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

app.use(express.static(path.join(_dirname, "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
