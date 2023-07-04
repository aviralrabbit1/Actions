const express = require('express');
const app = express();

app.get('/names', (req, res) => {
    res.send("Aviral");
});

PORT = 5000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});