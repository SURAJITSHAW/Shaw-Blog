import { useState } from "react";

const Home = () => {

    // Variables which changes we want to show in our UI
    const [name, setName] = useState("Riya Ghosh"); 

    const clickHandle = () => {
        // changes the value through the funct we get from useState, so our UI will reacts to the update
        setName("Riya Shaw")
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            
            {/* Here we didn't invoke the funct, as we generally do in tradional HTML. Rather we just pass a refernce  to the funct. Otherwise it'll call itself automatically twice in the begining */}
            <button onClick={clickHandle}>Click Me</button>
        </div>
     );
}
 
export default Home;