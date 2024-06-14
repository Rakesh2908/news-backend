const express = require('express');
const router = express.Router();

const allNewsRoute = require('./allNewsRoute');
const topHeadlinesRoute = require('./topHeadlinesRoute');
const countryRoute = require('./countryRoute');

router.use('/all-news', allNewsRoute)
router.use('/top-headlines', topHeadlinesRoute)
router.use('/country', countryRoute)

module.exports = router