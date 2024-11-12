import express from "express";
import { connectdb } from "./config/dataBase.js";
import { apiRouter} from "./router/index.js";
import cookieParser from "cookie-parser";
connectdb();

const app = express();
app.use(cookieParser());
app.use(express.json());

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


app.use("/api",apiRouter)