import React, { useEffect, useState } from 'react';
import Stay from '../Stay/Stay';
import { Col, Row, Skeleton } from 'antd';

const Stays = (props) => {
  
  const stays = props.stays
  const filterstays = props.filterstays
      return (
        <div style={{marginTop:'3%'}}>
            <Row gutter={[10,10]}>
            
               {
                
                filterstays.length==0?stays.map(stay=> <Col align="center" span={8}><Stay stay={stay} key={stay.id}></Stay></Col> ) : 
                filterstays.map(stay=> <Col align="center" span={8}><Stay stay={stay} key={stay.id}></Stay></Col> ) 
                
                
            }
          
            </Row>
           
            
        </div>
    );
};

export default Stays;