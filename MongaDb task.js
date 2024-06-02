// Below Queries are executed by MongoDB Shell....

// Find all the information about each products

db.products.find();

// Find the product price which are between 400 to 800

db.products.find({"product_price": {$gt: 400 , $lt: 800 }});

// Find the product price which are not between 400 to 600

db.products.find({"product_price": {$not : { $gt: 400 , $lt: 800 }}});

// List the four product which are greater than 500 in price

db.products.find({"product_price": { $gt: 500} } , {} , {limit : 4});

// Find the product name and product material of each products

db.products.find({} , {product_name : 1 , product_material : 1} );

// Find the product with a row id of 10

db.products.find( {id : '10'} );

// Find only the product name and product material

db.products.find({} , {_id : 0 , id: 0 , product_price : 0 , product_color : 0});

// Find all products which contain the value of soft in product material


db.products.find({ product_material : {$regex : 'Soft'}});

// Find products which contain product color indigo and product price 492.00
db.products.find({product_color : {$eq : 'indigo'} , product_price : {$eq : 492 }});

// Delete the products which product price value are 28

db.products.deleteMany( {product_price : 28} );




