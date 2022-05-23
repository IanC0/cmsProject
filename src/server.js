require("./db/connection");
const express = require("express");
const cors = require("cors");

const userRouter = require("./user/userRoutes");
// const groupRouter = require("./group/groupRoutes");
// const componentRouter = require("./component/componentRoutes");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.use(userRouter);
// app.use(groupRouter);
// app.use(componentRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


