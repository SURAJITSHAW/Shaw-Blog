import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My first blog", body: "lorem ipsum...", author: "Surajit Shaw", id: 1 },
        { title: "My second blog", body: "lorem ipsum...", author: "Ayesha Shaw", id: 2 },
        { title: "My third blog", body: "lorem ipsum...", author: "Riya Shaw", id: 3 },
    ])

    return ( 
        <div className="home">
            {/* Since we want to list through all elements in the blog array, and return or add a DOM node in the page. We'll using map() method and returns jsx format for each element */}

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;