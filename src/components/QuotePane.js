import React, {  useEffect, useState }from 'react';
import '../styles/Pane.css'


const QuotePane = () => {

    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')

    const onFetch = (data) => setQuote(data)
    const onFetchAuth = (data) => setAuthor(data)

    useEffect(() => {
        fetch("https://type.fit/api/quotes/")
            .then(function(response) {
                return response.json();
            })
            .then(async function(data) {
                const fetchedData = await data
                const randIndex = await fetchedData[Math.round(Math.random() * await fetchedData.length + 1)]
                onFetch(randIndex.text)
                onFetchAuth(randIndex.author)
            });
    }, []);

    return (
        <div className='pane odd quote'>
            {quote ? 
                <>
                    <p className='quoteText'>
                        "{quote}"
                    </p>
                    <p id='quoteAuth'>
                        —{author} 
                    </p>
                </>
                :null
            }
        </div>
    );
};

export default QuotePane;