const { Product } = require('../models');

// Each object containing properties can be seen as a row
// and the array as a table wrapping the rows. Each property
// being the columns of this table.

// All of these rows contain product information and a foreign key 
// which associates the product with a category 
const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

// inserts multiple rows of products into the Product table in the database
const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
