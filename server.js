import http from "http";
import app from "./app.js";
import { config } from "./config/env.js";
import { connectDB } from "./config/db.js";

const PORT = config.PORT || 5000;

// Start server only after DB connects
const startServer = async () => {
  try {
    await connectDB(); // ✅ Connect to MongoDB first

    const server = http.createServer(app);

    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`👉 http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server", error.message);
    process.exit(1);
  }
};

startServer();
