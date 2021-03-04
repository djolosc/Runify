const express = require('express');
const connection = require('./models/index');
const router = require('./router');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  try {
    await connection;
    console.log('Database is connected 🥳');
    app.listen(PORT, () => {
      console.log(`Listening on http://localhost/${PORT} 🚀`);
    });
  } catch (error) {
    console.log(error);
  }
})();
