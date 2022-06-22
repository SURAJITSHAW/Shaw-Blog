import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My first blog", body: "lorem ipsum...", author: "Riya", id: 1 },
        { title: "My second blog", body: "lorem ipsum...", author: "Ayesha", id: 2 },
        { title: "My third blog", body: "lorem ipsum...", author: "Riya", id: 3 },
        { title: "My fourth blog", body: "lorem ipsum...", author: "Surajit", id: 4 },
        { title: "My fifth blog", body: "lorem ipsum...", author: "Riya", id: 5 },
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    return ( 
        <div className="home">
            {/* All Blogs */}
            <BlogList title="All Blogs!" blogArray={ blogs } handleDelete={ handleDelete }/>
            {/* Riya's Blogs */}
            <BlogList title="Riya's Blogs!" blogArray={ blogs.filter((blog) => blog.author === "Riya") } handleDelete={ handleDelete }/>
        </div>
     );
}
 
export default Home;