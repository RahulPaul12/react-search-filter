import logo from './assets/logo.svg';
import './App.css';
import Main from './components/Main/Main';
import Stays from './components/Stays/Stays';
import Stay from './components/Stay/Stay';
import Menu from './components/Menu/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StayDetails from './components/StayDetails/StayDetails';
import Payment from './components/Payment/Payment';
function App() {
  return (
    <div>

      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/staydetails/:id" element={<StayDetails />} />
        <Route path="/payment" element={<Payment />} />
        
      </Routes>
      
      </BrowserRouter>
      


      
    </div>
        
  );
}

export default App;
