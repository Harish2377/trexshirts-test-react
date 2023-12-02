import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

import { addToCart } from '../redux/slices/cartSlice';
import axios from 'axios';



function Home() {

  const [data,setData] = useState("")
  const getallProducts = ()=>{
    axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json").then((res)=>{
      setData(res.data)
    })
  }

  useEffect(()=>{

    getallProducts()

  },[])

  console.log(data);





const dispatch = useDispatch()

  return (
    <Row className='mx-4' style={{marginTop:'155px'}}>

      {
        data?.length>0?data?.map((product,index)=>(   
<Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card style={{ width: '18rem',height:'29rem' }} className='shadow rounded'>
        <Card.Img height={'200px'} variant="top" src={product?.imageURL} />
        <Card.Body>
          <Card.Title className='fw-bolder' >{product?.name}</Card.Title>
          <Card.Text>
           <p>{product?.type}</p>
           <h5 className='fw-bolder'>${product?.price}</h5>
          </Card.Text>
         <div className='d-flex justify-content-between'>
            {/* <Button className='btn btn-light' onClick={()=>dispatch(addToWishlsit(product))}><i className="fa-solid fa-heart text-danger fa-2x"></i></Button> */}
            <p>{product?.color}</p>
            <Button className='btn btn-light' onClick={()=>dispatch(addToCart(product))}><i className="fa-solid fa-cart-plus text-success fa-2x"></i></Button>
         </div>
        </Card.Body>
      </Card>
  
        
  </Col>)):<p className='text-danger fw-bolder fs-4'>Nothing to Display</p>
        
     
      }





    </Row>
  )
}

export default Home