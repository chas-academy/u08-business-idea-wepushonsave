import dotenv from "dotenv";
import userRouter from "./api/User";

dotenv.config();
const port = process.env.PORT || 3000;

app.get("/test", (req, res) => {
  res.send("apitest")
})

app.use("/api/user", userRouter);

app
  .listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
