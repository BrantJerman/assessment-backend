const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, sendQuote, allQuotes, deleteQuote } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post('/api/quote', sendQuote)
app.get('/api/sendquotes', allQuotes)
app.delete('/api/delete/:deleteQuote', deleteQuote)

app.listen(4000, () => console.log("Server running on 4000"));