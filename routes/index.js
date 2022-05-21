// import router and api routes
const router = require('express').Router();
const apiRoutes = require('./api');

// uses api folder when /api is used
router.use('/api', apiRoutes);

// any other route gets this html as a response
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;