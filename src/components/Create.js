import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    // Had to put form input elements inside a state to keep track / store them
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { author, title, body } 

        setIsPending(true)

        fetch('https://db-for-blog-project.herokuapp.com/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then( () => {
            console.log('New Blog added');
            setIsPending(false)
            history.push('/')
        })
    }

    return ( 
        <div className="create">
            <h2>Add new Blog ✍</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Author Name :
                </label>
                <input required value={ author } onChange={ (e) => setAuthor(e.target.value)} type="text" />
                <label>
                    Title :
                </label>
                <input required value={ title } onChange={ (e) => setTitle(e.target.value)} type="text" />
                <label>
                    Body :
                </label>
                <textarea required value={ body } onChange={ (e) => setBody(e.target.value)}></textarea>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Your Blog...☕</button>}
            </form>
        </div>
     );
}
 
export default Create;