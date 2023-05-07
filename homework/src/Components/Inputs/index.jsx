import React, { useState } from 'react'

const Inputs = () => {
    const [valuess,setValuess]=useState('')
    const[error,setError]=useState("")
const[items,setItems]=useState([])
    const handleChange=(e)=>{
        let count=e.target.value;
        if(count.length < 5 || count===count.toLowerCase()){
            setError(true)
           
        }else{
            setError(false)
        }
       setValuess(count)
    }

    const handleClick=()=>{
      
        if(!error){
           setItems([...items,valuess])
           setValuess('')
        }

    }
  return (
   <>
<div>
    <input type='text' value={valuess} onChange={handleChange}/>
<button disabled={error}>Add</button>  : <button disabled={error} onClick={handleClick}>Add</button > 
{error && <p style={{color:'red'}}>Erorrss</p>}
<ul>
    {items.map((item,index)=>(
        <li key={index}>{item}</li>
    ))}
</ul>
</div>
   </>
  )
}

export default Inputs