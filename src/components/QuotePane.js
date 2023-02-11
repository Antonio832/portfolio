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
                        " {quote} "
                    </p>
                    <p id='quoteAuth'>—{author} 
                        <span className='share'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="48" width="48"><path d="M36.35 44q-2.35 0-4.025-1.675Q30.65 40.65 30.65 38.3q0-.35.075-.825t.225-.875L15.8 27.8q-.75.85-1.85 1.375t-2.25.525q-2.35 0-4.025-1.675Q6 26.35 6 24q0-2.4 1.675-4.05T11.7 18.3q1.15 0 2.2.45 1.05.45 1.9 1.3l15.15-8.7q-.15-.35-.225-.8-.075-.45-.075-.85 0-2.4 1.675-4.05T36.35 4q2.4 0 4.05 1.65t1.65 4.05q0 2.35-1.65 4.025-1.65 1.675-4.05 1.675-1.15 0-2.225-.375Q33.05 14.65 32.3 13.8l-15.15 8.4q.1.4.175.925.075.525.075.875t-.075.75q-.075.4-.175.8l15.15 8.6q.75-.7 1.75-1.125 1-.425 2.3-.425 2.4 0 4.05 1.65t1.65 4.05q0 2.35-1.65 4.025Q38.75 44 36.35 44Zm0-31.6q1.15 0 1.925-.775.775-.775.775-1.925t-.775-1.925Q37.5 7 36.35 7t-1.925.775q-.775.775-.775 1.925t.775 1.925q.775.775 1.925.775ZM11.7 26.7q1.15 0 1.925-.775.775-.775.775-1.925t-.775-1.925Q12.85 21.3 11.7 21.3t-1.925.775Q9 22.85 9 24t.775 1.925q.775.775 1.925.775ZM36.35 41q1.15 0 1.925-.775.775-.775.775-1.925t-.775-1.925Q37.5 35.6 36.35 35.6t-1.925.775q-.775.775-.775 1.925t.775 1.925Q35.2 41 36.35 41Zm0-31.3ZM11.7 24Zm24.65 14.3Z"/></svg>
                        </span> 
                    </p>
                </>
                :null
            }
        </div>
    );
};

export default QuotePane;