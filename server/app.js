// import express from "express";
// import session from "express-session";
// import passport from "passport";
// import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.routes.js";
// import morgan from "morgan";
// import dotenv from "dotenv";
// import cors from "cors"
// import passportGoogleConfig from "./config/passport.js";
// import User from "./models/User.js";

// dotenv.config();

// const app = express();

// // const corsOptions = {
// //   origin: 'http://localhost:5173',
// //   credentials: true
// // };

// // app.use(cors(corsOptions));

// app.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	 res.header("Access-Control-Allow-Credentials", "true");
// 	res.header(
// 		"Access-Control-Allow-Headers",
// 		"Origin, X-Requested-With, Content-Type, Accept"
// 	);
// 	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); 
// 	next();
// });

// app.use(express.json());
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: false,
//     cookie: { maxAge: 24 * 60 * 60 * 1000 },
//   })
// );
// app.use(morgan("dev"));
// app.use(passport.initialize());
// app.use(passport.session());

// app.use("/auth", authRoutes);
// app.use("/api/user", userRoutes);

// passportGoogleConfig();

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (err) {
//     done(err, null);
//   }
// });

// export default app;


import express from "express";
import session from "express-session";
import passport from "passport";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.routes.js";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import passportGoogleConfig from "./config/passport.js";
import User from "./models/User.js";
import MongoStore from 'connect-mongo';

dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_CONN_STRING,
      collectionName: 'sessions',
    }),
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);
app.use("/api/user", userRoutes);

passportGoogleConfig();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default app;
