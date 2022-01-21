import express from "express";
import cors from "cors";
import Gun from "gun";
import setupSwagger from "./utils/swaggerSetup";
import colorsRouter from "./routes/colorsRouter";
import accessEnv from "./utils/accessEnv";

const app = express();
app.use(
  cors({
    origin: "*",
    exposedHeaders: "Content-Range",
  })
);
app.use(express.json());
const PORT = accessEnv("PORT", 3030);

app.use("/api", colorsRouter);

setupSwagger(app);

const SERVER_ADDRESS = accessEnv("SERVER_ADDRESS", "http://localhost");

const server = app.listen(PORT, () => {
  console.log(`example app running at ${SERVER_ADDRESS}:${PORT}`);
});

Gun({
  web: server,
  radisk: false,
});

export{app}