# Run locally

```
node app.js
```

# Test

```
npm test
```
# Invoice API

- POST /invoice
- GET /invoice/{id}
- GET /count

Post the `/invoice` stores the invoice.
Get on the `/count` returns the number of invoices.
Get on the `/invoice/{invoiceId}` returns the requested invoice (invoiceId should be a guid).

# Docker
Create the image
```
docker build -t invoiceapi .
```
Run it
```
docker run -it --rm -p 3000:3000 invoiceapi
```
