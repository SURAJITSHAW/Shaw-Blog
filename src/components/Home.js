import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)

    // Calling the useEffect hook only once to fetch the data
    useEffect(() => {
      
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
            })

    }, [])
    
    return ( 
        <div className="home">
            {/* Loading screen */}
            {isPending && <div>Loading...</div>}
            {/* All Blogs */}
           {blogs && <BlogList title="All Blogs!" blogArray={ blogs } />}
        </div>
     );
}
 
export default Home;