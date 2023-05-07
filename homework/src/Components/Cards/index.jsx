import React from 'react'
import { Card,Col, Row  } from 'antd';

const { Meta } = Card;


const Cards = ({photos}) => {
  return (

   <>
   <section style={{margin:'50px auto', width:'85%', }}>

    <Row gutter={[20,30] }style={{marginBottom:'30px'}} >
  
    {photos.map((photo) => (
      <Col className="gutter-row" span={6}  xs={24} sm={24} md={12} lg={6}>
       
       
         <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={photo.url} />}
  >
    <Card >{photo.title}</Card>
   
  </Card>
  

      </Col>
     ))}
 
    </Row >
       </section> 
       
    </>
  )
}

export default Cards