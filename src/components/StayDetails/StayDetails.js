import React, { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';
import { Link, useParams } from 'react-router-dom';
import { Button, Steps } from 'antd';
import './StayDetails.css'
import Payment from '../Payment/Payment';
const StayDetails = (props) => {
    const {id} = useParams()
    
    return (
        <>
        <Menu/>
        <div>
        <Steps
        style={{width:'80%', margin:'auto', marginTop:'10px'}}
    size="small"
    current={0}
    
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


<div class="container">
        <header>Personal Details</header>
        <form action="#">
            <div class="form first">
                <div class="details personal">
                    <span class="title">Details</span>
                    <div class="fields">
                        <div class="input-field">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your name" name='name' id='name'  required/>
                        </div>
                        <div class="input-field">
                            <label>Date of Birth</label>
                            <input type="date" placeholder="Enter birth date" required/>
                        </div>
                        <div class="input-field">
                            <label>Email</label>
                            <input type="text" placeholder="Enter your email" required/>
                        </div>
                        <div class="input-field">
                            <label>Mobile Number</label>
                            <input type="number" placeholder="Enter mobile number" required/>
                        </div>
                        <div class="input-field">
                            <label>Gender</label>
                            <select required>
                                <option disabled selected>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div class="input-field">
                            <label>Occupation</label>
                            <input type="text" placeholder="Enter your ccupation" required/>
                        </div>
                    </div>
                </div>
                <div class="details ID">
                    <span class="title">Identity Details</span>
                    <div class="fields">
                        <div class="input-field">
                            <label>ID Type</label>
                            <input type="text" placeholder="Enter ID type" required/>
                        </div>
                        <div class="input-field">
                            <label>ID Number</label>
                            <input type="number" placeholder="Enter ID number" required/>
                        </div>
                        <div class="input-field">
                            <label>Issued Authority</label>
                            <input type="text" placeholder="Enter issued authority" required/>
                        </div>
                        <div class="input-field">
                            <label>Issued State</label>
                            <input type="text" placeholder="Enter issued state" required/>
                        </div>
                        <div class="input-field">
                            <label>Issued Date</label>
                            <input type="date" placeholder="Enter your issued date" required/>
                        </div>
                        <div class="input-field">
                            <label>Expiry Date</label>
                            <input type="date" placeholder="Enter expiry date" required/>
                        </div>
                    </div>
                   <Button class="nextBtn" >
                        <span class="btnText">Submit</span>
                        <i class="uil uil-navigator"></i>
                    </Button>
                </div> 
            </div>
            </form>
                        
              
    </div>


        </div>
        </>
        
    );
};

export default StayDetails;