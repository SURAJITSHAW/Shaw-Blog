import { useHistory, useParams } from "react-router-dom";
import UseFetch from "../custom-hooks/useFetch";

const BlogDetails = () => {
    // Getting the route parameter with the help of a built-in hook
    const { id } = useParams()
    const { data: blogs, isPending, error } = UseFetch('https://db-for-blog-project.herokuapp.com/blogs/' + id)
    const history = useHistory()

    const handleClick = () => {
        fetch('https://db-for-blog-project.herokuapp.com/blogs/' + id, {
            method: 'delete'
        }).then(() => history.push('/'))
    }

    return ( 
        <div className="blog-details">
            {/* Error message / screen */}
            {error && <div>{ error }</div>}
            {/* Loading screen */}
            {isPending && <div>Loading...</div>}

            { blogs && (
                <article>
                    <h2>{ blogs.title }</h2>
                    <p>{ blogs.author }</p>
                    <div>{ blogs.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;