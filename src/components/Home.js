import UseFetch from "../custom-hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
    const { data: blogs, isPending, error } = UseFetch('http://localhost:8000/blogs')
    
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