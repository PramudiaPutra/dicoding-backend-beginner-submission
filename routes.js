const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return 'Homepage';
    },
  },
  {
    method: 'GET',
    path: '/about',
    handler: (req, h) => {
      return 'About page';
    },
  },
];

module.exports = routes;
