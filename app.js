const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to CodeHandbook')
});

app.get('/invoice/:invoiceId', (req, res) => {
    var invoiceId = req.params.invoiceId;
    console.log(invoiceId);
    res.send(invoiceId);
})

app.listen(3000, () => console.log('Application listening on port 3000!'))
module.exports = app