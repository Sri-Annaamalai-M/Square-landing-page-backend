import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/v1", routes);

// Global Error Handler
app.use(errorHandler);

export default app;
