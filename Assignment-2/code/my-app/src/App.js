import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  {/* Start your React code here */}
  <div className="employee profile">
  <img className="avtar "src={employee.profileImg} alt="avtrar"/>

  <h1 className="name">{employee.name}</h1>

 
  <div className='content'><label className="label">Location</label><br></br><bold className='data'>{employee.location}</bold></div>

  <div className='content'><label className="label">Blood group</label><br></br><bold className='data'>{employee.bloodGroup}</bold></div>


  <div className='content'><label className="label">Age</label><br></br><bold className='data'>{employee.age}</bold></div>


  </div>
  
  
  
</div>
)
}




export default App;
