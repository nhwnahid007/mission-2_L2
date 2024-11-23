import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

//parser

app.use(express.json());
app.use(express.text());

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log('url=',req.url,'method=', req.method,"hostname=", req.hostname);
  next();
};

app.get("/:userId/:subId", (req: Request, res: Response) => {
  //http://localhost:5000/6/72
  console.log(req.params); //{ userId: '56', subId: '72' }
  res.send("Hello, Dev!");
});
app.get("/", logger, (req: Request, res: Response) => {
  //{ email: 'nhwnahid@gmail.com', name: 'nahid' }
  console.log(req.query); //{ email: 'nhwnahid@gmail.com', name: 'nahid' }
  res.send("Hello, Dev!");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.send("got data");
});

export default app;
