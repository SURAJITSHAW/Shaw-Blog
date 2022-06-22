import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My first blog", body: "lorem ipsum...", author: "Surajit Shaw", id: 1 },
        { title: "My second blog", body: "lorem ipsum...", author: "Ayesha Shaw", id: 2 },
        { title: "My third blog", body: "lorem ipsum...", author: "Riya Shaw", id: 3 },
    ])

    return ( 
        <div className="home">
            <BlogList title="All Blogs!" blogArray={ blogs }/>
        </div>
     );
}
 
export default Home;