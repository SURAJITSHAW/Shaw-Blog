import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    // Calling the useEffect hook only once to fetch the data
    useEffect(() => {
      const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal})
            .then(res => {
                if (!res.ok) {
                    throw Error("Can't fetch the data. Server is down :(")
                }

                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                console.log(err);
                if (err.name === 'AbortError') {
                    console.log("fetch aborted!");
                } else {

                    setIsPending(false)
                    setError(err.message)
                }
            })

        return () => abortCont.abort()

    }, [url])

    return { data, isPending, error}
}
 
export default UseFetch;