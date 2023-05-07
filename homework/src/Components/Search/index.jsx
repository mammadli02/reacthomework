import { Input } from 'antd';
import React from 'react'

function Search({todosState,setPhotos, placeholder}) {
  function handleSearch(e) {
    if (e.target.value.trim()==="") {
        setPhotos(todosState);
    }
    else{
     let filteredtodos = todosState.filter(photo => photo.title.toLowerCase().includes(e.target.value.toLowerCase().trim()));
     setPhotos(filteredtodos);
    }
 }
  return (
    <>
      <Input onChange={(e)=>handleSearch(e)} placeholder={placeholder} style={{margin: '50px auto ', width:'85%'  }}/>
      
    </>
  )
}

export default Search