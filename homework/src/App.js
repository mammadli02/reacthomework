import Buttons from "./Components/Button";
import { useEffect, useState } from 'react';
import Cards from "./Components/Cards";
import Search from "./Components/Search";
import Input from "antd/es/input/Input";




function App() {
  const [photos, setPhotos] = useState([])
  const [todosState, setTodosState] = useState(photos);
  const [todo,setTodo] = useState({title:''});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {

// console.log(data);
// console.log(data.title)


        setPhotos(data)
        setTodosState(data)

       
      });
  }, []);
  return (
    <>
    
     <Buttons/>
   
  
     <Search todosState={todosState} setPhotos={setPhotos} placeholder="search title(s)"/>
    <Cards photos={photos}/>
   
    </>
  );
}

export default App;
