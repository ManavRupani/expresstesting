
//imports
const express = require('express');
const app = express();
const router = require('./routes')
const port = 3000;


//view
app.set('view engine', 'ejs');
app.use(express.static('public'));


//main app route
app.use("",router)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})