// doing it this way lets me inline comments.
import cat1 from './category1';
import cat2 from './category2';
import cat3 from './category3';
import cat4 from './category4';

const schema = {
  type: 'Categorization',

  elements: [
      cat1,
      cat2,
      cat3,
      cat4,
  ],
  options: {
    "variant": 'stepper',
    "showNavButtons": true,
    "vertical": false
  }
};
// import cat1 from './category1';
// schema.elements.push(cat1);
//
// import cat2 from './category2';
// schema.elements.push(cat2);
// import cat3 from './category3';
// schema.elements.push(cat3);
// import cat4 from './category4';
// schema.elements.push(cat4);

export default schema;
