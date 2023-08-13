import React from 'react';
import Menu from '../Menu/Menu';
import { Steps } from 'antd';

const Payment = (props) => {
    
    return (
        <div>
        <Menu/>
       
        <Steps
        style={{width:'80%', margin:'auto', marginTop:'10px'}}
    size="small"
    current={1}
    
    items={[
      {
        title: 'Personal Details',
        

      },
      {
        title: 'Payment',
      },
      {
        title: 'Waiting',
      },
    ]}
  />

<div>
    <h1>{props.details}</h1>
</div>




        </div>
    );
};

export default Payment;