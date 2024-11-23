import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

// Middleware to parse JSON and text bodies
app.use(express.json());
app.use(express.text());

// Create routers for users and courses
const userRouter = express.Router();
const courseRouter = express.Router();

// Register the routers with the app
app.use("/api/v1/users/", userRouter);
app.use("/api/v1/courses/", courseRouter);

// Endpoint to create a user
userRouter.post("/createUser", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User created successfully",
    data: user,
  });
});

// Endpoint to retrieve user data
userRouter.get("/createUser", (req: Request, res: Response) => {
  const user = req.body; // This should be changed to fetch user data
  // Simulate fetching user data
  // const user = { id: userId, name: "Md. Nahidul Islam", email: "nhwnahid@gmail.com" };

  res.json({
    success: true,
    message: "User data retrieved successfully",
    data: user,
  });
});

// Endpoint to create a course
courseRouter.post("/createCourse", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "Course created successfully",
    data: course,
  });
});

// Logger middleware to log request details
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    "url=",
    req.url,
    "method=",
    req.method,
    "hostname=",
    req.hostname
  );
  next();
};

// Endpoint to handle dynamic user and sub IDs
app.get("/:userId/:subId", (req: Request, res: Response) => {
  // Example: http://localhost:3000/6/72
  console.log(req.params); // { userId: '6', subId: '72' }
  res.send("Hello, Dev!");
});

// Root endpoint with logger and error handling
app.get("/", logger, (req: Request, res: Response, next: NextFunction) => {
  console.log(req.query); // Example: { email: 'nhwnahid@gmail.com', name: 'nahid' }

  try {
    res.send("Hello, World!"); // 'something' was undefined, replaced with a string
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// Root POST endpoint with logger
app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.send("got data");
});

// Catch-all route handler for undefined routes
app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route is not found",
  });
});

// Global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

export default app;
