// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products (one to many)
Category.hasMany(Product, {
  foreignKey: 'category_id'
});
// Products belongsTo Category (one to many)
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)  (many to many)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tags',
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag) (many to many)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'products',
  foreignKey: 'tag_id'
});

// associates product-tags with product_id which matches a product to that product
ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
});
// associates product-tags with tag_id which matches a tag to that tag
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
});

// One product has many product-tags (one to many)
Product.hasMany(ProductTag, {
  foreignKey: 'product_id'
});
// One tag has many product-tags (one to many)
Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
