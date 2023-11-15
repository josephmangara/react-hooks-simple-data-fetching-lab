// create your App component here
import { useState, useEffect} from "react";

function App() {
const [dogImage, setDogImage] = useState("");

useEffect (() =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data =>  {
        console.log(data)
        setDogImage(data.message)
    })
    .catch((error) => {
        console.error("Error fetching dog image:", error);
      });
}, [])


  return (
    <div>
        {dogImage ? (
        <img src={dogImage} alt="A Random Dog"/>):(
            <p>Loading...</p>
        )}
    </div>
  )
}

export default App;