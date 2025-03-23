import express from "express";
import connection from "./database/db.js";
import route from "./routes/route.js";
import cors from "cors";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/', route);
