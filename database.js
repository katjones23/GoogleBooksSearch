require('dotenv').config()

const mongoose = require('mongoose');
const connection = "mongodb+srv://thedevkat:<"+process.env.DB_PASS+">@cluster0.cvb4x.mongodb.net/<database>?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

    