# Node.js-CRUD-API-Boilerplate
A basic CRUD REST API to get you started

Correct usage for production: issue your encrypted api keys, on request send decrypt the key (maybe containing user ID) 
and match with the users' collection

Test operations:

// get a product
curl -H "Authorization: Basic your_encrypted_key_here" http://127.0.0.1:8083/product/PROD-1

// add a new product
curl -X POST -H "Authorization: Basic your_encrypted_key_here" -H "Content-Type: application/json" -d '{"SKU": "PROD-1","name": "Test product 1", "price": 34.95, "currency": "USD", "quantity": 100, "description": "Top of the line product"}' http://127.0.0.1:8083/product

// update a product
curl -X PUT -H "Authorization: Basic your_encrypted_key_here" -H "Content-Type: application/json" -d '{"SKU": "PROD-1","name": "Test product 1", "price": 29.99, "currency": "USD", "quantity": 30, "description": "Top of the line product"}' http://127.0.0.1:8083/product/PROD-1

// delete a product
curl -X DELETE -H "Authorization: Basic your_encrypted_key_here" http://127.0.0.1:8083/product/PROD-1

Sample schemas:
See models folder