import { useState } from "react";

const Create = () => {
    // Had to put form input elements inside a state to keep track / store them
    const [authorName, setAuthorName] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { authorName, title, body } 

        console.log(blog);
    }

    return ( 
        <div className="create">
            <h2>Add new Blog ✍</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Author Name :
                </label>
                <input required value={ authorName } onChange={ (e) => setAuthorName(e.target.value)} type="text" />
                <label>
                    Title :
                </label>
                <input required value={ title } onChange={ (e) => setTitle(e.target.value)} type="text" />
                <label>
                    Body :
                </label>
                <textarea required value={ body } onChange={ (e) => setBody(e.target.value)}></textarea>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;