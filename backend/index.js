const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

const corsSettings = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "http://localhost:4200",
    preflightContinue: false
};

app.use(express.json());
app.use(cors(corsSettings));

const product = {
    items: [
        {
            price: "10",
            name: "test1",
            image: "test1",
            rating: 5
        },
        {
            price: "5",
            name: "test2",
            image: "test1",
            rating: 3
        },
        {
            price: "5",
            name: "test3",
            image: "test1",
            rating: 3
        }
    ],
    total: 0,
    page: 0,
    perPage: 5,
    totalPages: 2
};

product.total = product.items.length;


app.get("/", (req, res) => {
    console.log("Sending response:", product);
    res.send(product);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
