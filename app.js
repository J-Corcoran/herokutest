var express = require('express');
const app = express();
const port = process.env.PORT || 3000; //sets to provided port or 3000 (i.e. if running locally)


app.use(express.static("public"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


