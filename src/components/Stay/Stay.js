import React, { useState } from 'react';
import { Button, Card, Col, Row, Skeleton } from 'antd';
import Meta from 'antd/es/card/Meta';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Stay.css';
import { Link, useNavigate } from "react-router-dom"
import StayDetails from '../StayDetails/StayDetails';
const Stay = (props) => {
    
    let loading = props.load
    const {city,photo, title,type, rating,id}= props.stay;
    const navigate = useNavigate()
    return (
        <div>
          
           <Skeleton active loading={loading}/>
            <Card
                hoverable
                style={{ width:'80%', height:300, position:'relative'}}
                cover={<img style={{height:200, borderRadius:'8px', objectFit:'cover'}} alt="example" src={photo} />}
            >
            <Row>
                <Col span={12} style={{position:'absolute' ,left:5, marginTop:'1px' }}>
                    <p style={{position:'absolute' ,left:5}}>{type}</p>
                    <Meta title={title} style={{lineHeight:5, paddingBottom:'2px'}}/>
                </Col>
               <Col span={12} style={{position:'absolute' ,right:5}}><p><FontAwesomeIcon icon={faStar} style={{color: "#ff8040"}} /> {rating}</p></Col> 
                
            </Row>
                
          <Link to={`/staydetails/${id}`}><Button  type="primary" style={{position:'absolute',bottom:0, left:0 }} block>Book Room</Button></Link> 
            </Card>
            
        </div>
        
  
     
    );
};

export default Stay;