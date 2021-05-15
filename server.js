import "dotenv/config"
import express from "express";
import routes from "./routes";
import cors from "cors";
import morgan from "morgan"
import helmet from "helmet";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());


app.use("/api/v1/users", routes.user);

app.use((req, res) => {
  res.status(404).send("404: Page not found");
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})