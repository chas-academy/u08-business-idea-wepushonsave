
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});


startApp();

/*Renamed the index file to js ening instead of ts,
changed the code inside to the one from blogrocket
Prevouis code:
const app = require("./app");
const { PORT } = process.env;

const startApp = () => {
    app
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};
 */

// installed nodemon "nodemon wraps your application, so you can pass all the arguments you would normally pass to your app"