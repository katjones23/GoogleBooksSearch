require("dotenv").config();

const router = require("express").Router();
const booksController = require("../../controllers/booksController")
const axios = require('axios').default;
const key = process.env.API_KEY;
const url = "https://www.googleapis.com/books/v1/volumes?q="

router.route("/search/:query")
    .post(function (req, res) {
        axios.get(url + req.params.query + `&key=${key}`)
            .then(function (response) {
                res.json(response.data.items)
            })
            .catch(function (err) {
                console.log(err);
                res.status(400).json(err);
            });
    });

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

router
    .route("/:id")
    .delete(booksController.remove);

module.exports = router;
