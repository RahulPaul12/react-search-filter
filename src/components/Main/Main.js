import React, { useEffect, useState } from 'react';
import Stay from '../Stay/Stay';
import Stays from '../Stays/Stays';
import Menu from '../Menu/Menu';

const Main = () => { 
    const [stays, setStays] = useState([]);
    const [filterlist=[], setFilterlist] =new useState(stays)

    useEffect(()=>{
        const stayLoad =  async ()=>{
           
          const response = await fetch("stays.json")
          .then(response=>response.json())
          .then(data=>setStays(data))
           
        }
       
        stayLoad()
        
      },[]) 

    var updatedList = [...stays];
    const  onTrigger = (event) => {
        const location =document.getElementById('location').value ||'Finland';
        const guest = document.getElementById('guest').value|| 0;

        

        updatedList = updatedList.filter((stay) => {
           
           if(stay.city.toLowerCase().indexOf(location.toLowerCase()) !== -1 && stay.maxGuests >= guest){
            
            return stay.city.toLowerCase().indexOf(location.toLowerCase())!==-1;
           }
           else{
            
           }
          });

          if(updatedList.length>0){
            setFilterlist(updatedList)
          }
          else{
            
            alert(`No stays found for ${location}`)

          }

    
          ;
          
      }
      
      
      
    return (
        <div>
            <Menu onTrigger={onTrigger}/>
            <Stays  filterstays={filterlist} stays={stays} />
        </div>
    );
};

export default Main;