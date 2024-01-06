import {useState} from "react";

const sleep = ms => new Promise(r => setTimeout(r, ms));

URL = "https://api.quotable.io/quotes/random"


function useFetch(){
    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const getQuote = async () => {
        setLoading(true)
        const result = await fetch(URL)
        const data = await result.json()
        let respObj = data.pop()
        await sleep(2000)
        setResponse({id: respObj.content, author: respObj.author})
        setLoading(false)

    }

    return {isLoading, response, getQuote}
}

export default useFetch;
