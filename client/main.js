const quoteURL = `http://localhost:4000/api/quotes`
const quotesCallback = ({ data: quotes }) => displayQuotes(quotes)

const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById('fortuneButton')

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const newQuote = document.getElementById('quote')
const submitBtn = document.getElementById('send')

submitBtn.addEventListener('click', () => {
    const quote = newQuote.value
    // console.log(quote)
    axios.post("http://localhost:4000/api/quote/", {
        quote: quote
    })
    .then((res) => {
        const data = res.data
        alert(data)
    })
})

const deleteQuote = document.getElementById('deleteQuote')
const submitBtn2 = document.getElementById('send2')

submitBtn2.addEventListener('click', () => {
    const deleteIt = deleteQuote.value
    console.log(deleteIt)
    axios.delete(`http://localhost:4000/api/delete/${deleteIt}`)
    .then((res) => {
        const data = res.data
        alert(data)
    })
})

const quoteBtn = document.getElementById('allQuotes')

const allQuotes = () => {
    axios.get(`http://localhost:4000/api/sendquotes/`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

quoteBtn.addEventListener('click', allQuotes)