// import app from './app.js';
// import connectDB from "./config/db.js";
// import dotenv from "dotenv"

// dotenv.config()  


// async function startServer() {
//   try {
//     await connectDB(); // Assuming connectDB is an asynchronous function

//     const PORT = process.env.PORT || 3000; // Get port from environment or use 5000 by default

//     app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

//   } catch (error) {
//     console.error('Error connecting to database:', error);
//     process.exit(1); // Exit the process with an error code (optional)
//   }
// }

// startServer();

import app from './app.js';
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();  

// Export the app for Vercel
export default async (req, res) => {
  await connectDB(); // Ensure the database is connected
  return app(req, res); // Use the app as the handler for requests
};
