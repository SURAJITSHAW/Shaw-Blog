import { useParams } from "react-router-dom";

const BlogDetails = () => {
    // Getting the route parameter with the help of a built-in hook
    const { id } = useParams()
    return ( 
        <div className="blog-details">
            <h2>Blog - { id }</h2>
        </div>
     );
}
 
export default BlogDetails;