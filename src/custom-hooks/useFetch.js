import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    // Calling the useEffect hook only once to fetch the data
    useEffect(() => {
      
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Can't fetch the data. Server is down :(")
                }

                return res.json()
            })
            .then(data => {
                setData(data)
                setError(null)
                setIsPending(false)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            })

    }, [url])

    return { data, isPending, error}
}
 
export default UseFetch;