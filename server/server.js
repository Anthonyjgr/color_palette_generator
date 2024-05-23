import app from './app.js';
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();  

async function startServer() {
  try {
    await connectDB(); // Assuming connectDB is an asynchronous function

    const PORT = process.env.PORT || 3000; // Get port from environment or use 3000 by default

    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1); // Exit the process with an error code (optional)
  }
}

startServer();
