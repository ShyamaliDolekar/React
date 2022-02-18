import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow = "<"
var arrowright = ">"
const userDetails = {
  name: 'Alan Ford',
  userID: 00005152,
  Email: 'alan.ford@email.com',
  Appointmenton: new Date().toLocaleString(),
  phone: +9887654321,
  OrderInfo:{  
    status: 'In Progress',
    Door: 'Mark',
    Time: new Date().toLocaleTimeString() 
  },
  Person: {
    Avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    Title: 'Boltaart Bosbessen',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'

  }
}

function App() {
  return (
    <div className="site-container">
      <div className='container basic-info'>
        <div className='arrow'>
         <a href='#' className='arrowInfo'>{arrow}</a>
        </div>
        <div>
          <h3>{userDetails.name}</h3>
          <p>{userDetails.userID}</p>
        </div>
        <div>
          <button>Print</button>
        </div>
      </div>

      <div className='container'>
        <div className='customer-info'>
          <div><h3>Appointment On </h3>{userDetails.Appointmenton}</div>
          <div><h3>Email </h3>{userDetails.Email}</div>
          <div><h3>Phone </h3>{userDetails.phone}</div>
        </div>
      </div>
      <div className='container'>
        <div className='order-info'>
          <div>
            <h3>Status</h3>
            <p><input type='radio'></input>{userDetails.OrderInfo.status}</p>
          </div>
          <div >
            <h3>Door</h3>
            <p>{userDetails.OrderInfo.Door}</p>
          </div>
          <div>
            <h3>Time</h3>
            <p>{userDetails.OrderInfo.Time}</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='product-info'>
          <div className='arrow'>
            <input type="checkbox" className='check'></input>
          </div>
          <div>
            <img src={userDetails.Person.Avatar} alt="display" width='100' height='100' />
          </div>
          <div>
            <h3>{userDetails.Person.Title}</h3>
            <p>{userDetails.Person.Description}</p>
          </div>
          <div className='arrowright'>
            <a href="#" className='arrowRight'>{arrowright}</a>
          </div>
        </div>
      </div>


    </div>
  );
}
export default App;
