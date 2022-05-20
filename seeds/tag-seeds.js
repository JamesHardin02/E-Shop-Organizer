const { Tag } = require('../models');

// each object containing tag_name can be seen as a row
// and the array as a table wrapping the rows. tag_name property
// being the column of this table. All of these rows will be inserted
// into Tag model in database
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// inserts multiple rows of tags into the Tag table in the database
const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
