const {addBooksHandler} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: (req, h) => {
      return 'About page';
    },
  },
];

module.exports = routes;
