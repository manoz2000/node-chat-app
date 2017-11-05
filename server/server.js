const path = require('path');
const express = require('express');
const public_path = path.join(__dirname, '../public');
var app = express();
const port = process.env.PORT || 3000;
app.use(express.static(public_path));
app.listen(port, () => {
    console.log(`Server is ^up on port ${port}`);
});