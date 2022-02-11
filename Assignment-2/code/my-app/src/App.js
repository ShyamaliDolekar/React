import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container App">
    <div className='profile-container'>
      <div className='profile'>
        <img src = {employee.profileImg} width="100" height="100" alt ="Profile Image"/>
      </div>
    </div>
    <div className='name'>
      <h1>{employee.name}</h1>
    </div>
    <div className='profile-details'>
      <label>Location</label>
      <strong>{employee.location}</strong>
    </div>
    <div className='profile-details'>
      <label>Blood Group</label>
      <strong>{employee.bloodGroup}</strong>
    </div>
    <div className='profile-details'>
      <label>Age</label>
      <strong>{employee.age}</strong>
    </div>
</div>
)
}
export default App;
