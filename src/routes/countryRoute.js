const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", (req, res) => {

    let pageSize = parseInt(req.query.pageSize) || 0;
    let page = parseInt(req.query.page) || 0;

    if(pageSize === undefined || page === undefined || page <= 0)
    {
        page = 1
        pageSize = 80
    }

    const country = req.params.iso

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}&page=${page}&pageSize=${pageSize}`;

    axios.get(url)
        .then((response) => {
            if(response.data.totalResults > page)
            {
                res.json({
                    status: 200,
                    success: true,
                    message: "Successfully fetched the data",
                    data: response.data
                })
            }

            else
            {
                res.json({
                    status: 200,
                    success: true,
                    message: "No More Results to Show",
                    data: response.data
                })
            }
        })
        .catch((error) => {
            res.json({
                status: 500,
                success: false,
                message: "Failed to fetch API",
                error: error
            })
        })
})

module.exports = router