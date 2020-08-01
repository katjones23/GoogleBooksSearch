const router = require("express").Router();
const db = require("../models");

router.get("/books", (req, res) => {
    db.Book.find({})
    .then(books => res.json(books))
    .catch(err => res.status(422).json(err));
});

router.post("/books", (req, res) => {
    db.Book.create(req.body)
    .then(book => res.json(book))
    .catch(err => res.status(400).json(err));
});

router.delete("/books/:id", (req, res) => {
    db.Book.deleteOne({ _id: req.params.id })
    .then(book => res.json(book))
    .catch(err => res.status(400).json(err));
});

modeul.exports = router;
