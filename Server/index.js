const express = require('express');
const connection = require('./models/index');
const router = require('./router');
const cors = require('cors');
const { PORT } = require('./config');

const corsConfig = {
  credentials: true,
};

const app = express();

app.use(cors(corsConfig));
app.use(express.json());
app.use(router);

(async function () {
  try {
    await connection;
    console.log('Database is connected 🥳');
    app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT} 🚀`);
    });
  } catch (error) {
    console.log(error);
  }
})();
