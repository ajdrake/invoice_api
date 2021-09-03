const express = require('express')
const app = express()
app.locals.count = 0;
app.get('/', (req, res) => {
    res.send('<p>POST /invoice</p><p>GET /invoice/{id}</p><p>GET /count</p>');
});

app.post('/invoice/', (req, res) => {
    console.log("an invoice posted");
    app.locals.count++;
})

app.get('/invoice/:invoiceId', (req, res) => {
    var invoiceId = req.params.invoiceId;
    app.locals.count++;
    console.log(invoiceId);
    res.send(invoiceId);
})

app.get('/count', (req, res) => {
    res.send(app.locals.count.toString());
})
app.listen(3000, () => console.log('Application listening on port 3000!'))
module.exports = app