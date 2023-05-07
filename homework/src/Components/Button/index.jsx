import React, { useState } from 'react' 
import { Button, Space } from 'antd';
const Buttons = () => {
    const[color,setColor]=useState(true);
   const handleClick=()=>{
    setColor(!color)
    
    }
  return (
    <>
    
    <Space wrap>
     <div  style={{width:'100px', height:'100px',  backgroundColor: color ? "gray" : "yellow" } } > </div>
    <Button  onClick={handleClick} type="primary" >Change Button</Button>
  </Space>
  </>
  )
}

export default Buttons