const express = require('express');
const app = express(); // create express appl
const PORT = process.env.PORT || 5000;

app.get('/names', (req, res) => {
    res.send("Aviral");
});

// start express server on port PORT
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});