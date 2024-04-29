import { useState } from "react";

const Home = () => {
    // let name = 'mario';
   
   const[name, setName] = useState('mario');  
   const[age, setAge] = useState(25);

    const handleClick = (e) => {
        console.log('hello, ninjas', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    const handleClickName = () =>{
        //name = 'luigi';
        //console.log(name);
        setName('luigi');
        setAge(30);
    }
    return ( 
        <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
        <h1>State</h1>
        <br />
        <p>{ name } is { age } years old.</p>
        <br />
        <button onClick={handleClickName}>Click Me</button>
        </div>
     );
}
 
export default Home;