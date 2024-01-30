// doing it this way lets me inline comments.

const schema = {
  type: 'Categorization',

  elements: [],
  options: {
    "variant": 'stepper',
    "showNavButtons": true,
    "vertical": false
  }
};
import cat1 from './category1';
schema.elements.push(cat1);

import cat2 from './category2';
schema.elements.push(cat2);
import cat3 from './category3';
schema.elements.push(cat3);
import cat4 from './category4';
schema.elements.push(cat4);

export default schema;
