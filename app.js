const express = require('express')
const { v4: uuidv4 } = require('uuid');
const app = express()

app.use(express.json());
app.locals.count = 0;
app.locals.invoices = [];

app.post('/invoice', (req, res) => {
    app.locals.count++;
    let invoiceId = uuidv4();
    let invoice = req.body;
    if(typeof(invoice.id) === "undefined"){
        invoice.id = invoiceId;
        app.locals.invoices.push(invoice);
    }
    else if(app.locals.invoices.filter(inv => inv.id === invoice.id).length == 0){
        app.locals.invoices.push(invoice);
    }
    
    res.send(invoice.id);
})

app.get('/invoice/:invoiceId', (req, res) => {
    let invoiceId = req.params.invoiceId;
    let invoices = app.locals.invoices.filter(invoice => invoice.id === invoiceId)
    if(invoices != null && invoices.length === 1){
        res.send(invoices[0]);
    }

    res.status(204).send({ error: "invoice not found" });
})

app.get('/count', (req, res) => {
    res.send(app.locals.count.toString());
})
app.listen(3000, () => console.log('Application listening on port 3000!'))
module.exports = app