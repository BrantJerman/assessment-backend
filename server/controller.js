const quotes = ['You are awesome', 'You da best', 'You be so smart']

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    
    getFortune: (req, res) => {
        const fortunes = ["Believe it can be done.", "Bide your time, for success is near.", "Carve your name on your heart and not on marble", "Congratulations! You are on your way.", "Courtesy is contagious."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];
      
        res.status(200).send(randomFortunes);
    },


    sendQuote: (req, res) => {
        
        let { quote } = req.body
        // console.log(quote)
        let newQuote = quote
        quotes.push(newQuote)
        res.status(200).send(quotes)
    },

    deleteQuote: (req, res) => {
        let deleteIt = req.params.deleteQuote
        console.log(deleteIt)
        let deleteQuote = deleteIt
        for (i = 0; i < quotes.length; i++) {
            if (deleteQuote == quotes[i]){
                quotes.splice([i], 1)
                res.status(200).send(quotes)
            } else {
                console.log('In order to delete your quote, it must match exactly.')
                // res.status(200).send(quotes)
            }
        }
    },

    allQuotes: (req, res) => {
        res.status(200).send(quotes)
    }

  

}