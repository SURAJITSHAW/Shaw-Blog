import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    // Calling the useEffect hook only once to fetch the data
    useEffect(() => {
      
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error("Can't fetch the data. Server is down :(")
                }

                setError(null)
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            })

    }, [])
    
    return ( 
        <div className="home">
            {/* Error message / screen */}
            {error && <div>{ error }</div>}
            {/* Loading screen */}
            {isPending && <div>Loading...</div>}
            {/* All Blogs */}
           {blogs && <BlogList title="All Blogs!" blogArray={ blogs } />}
        </div>
     );
}
 
export default Home;