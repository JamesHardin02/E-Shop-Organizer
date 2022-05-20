const { ProductTag } = require('../models');

// Each object containing properties can be seen as a row
// and the array as a table wrapping the rows. Each property
// being the columns of this table.

// Each row contains two foreign keys which connect
// a Tag and Product object together which makes ProductTag a
// 'through table' in the Tag model's and the Product model's 
// many to many relationship 
const productTagData = [
  {
    product_id: 1,
    tag_id: 6,
  },
  {
    product_id: 1,
    tag_id: 7,
  },
  {
    product_id: 1,
    tag_id: 8,
  },
  {
    product_id: 2,
    tag_id: 6,
  },
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 3,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 4,
  },
  {
    product_id: 3,
    tag_id: 5,
  },
  {
    product_id: 4,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 2,
  },
  {
    product_id: 4,
    tag_id: 8,
  },
  {
    product_id: 5,
    tag_id: 3,
  },
];

// inserts multiple rows of foreign key pairs into the ProductTag table in the database
const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
