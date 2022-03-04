import React from 'react';
import logo from './logo.svg';
import './App.css';
const d = new Date();
const date = d.getDate()
const month = d.getMonth()
const year = d.getFullYear()
const hours = d.getHours()
const minutes = d.getMinutes()


const employee = {
  name: "AnalyserNode",
  employeeID: "04654564",
  appointmentHead: "Appointment",
  appointment: `${hours}:${minutes}(${date}-${month}-${year})`,
  emailHead: "Email", email: "alian@fdaj.in",
  phoneHead: "Phone", phone: 8924984,
  statushead: "status",
  status: ["inprogress", "just received"],
  doorhead: "door",
  door: "mark",
  timehead: "time",
  time: `${hours + 1}:${(minutes + 30) % 60}`, timeFixed: `(${(date + 1) % 30}-${month}-${year})`,
  delivered: "bahubali",
  content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",


}


var arrow = "<"
var rightArrow = ">"
var k = { textDecoration: "none", color: "black" }
function App() {
  return (
    <div className="site-container">
      {/* Start Your code here */}
      <div className="header">
        <div><a href='javascript:void(0)' className='anchor' style={k}>{arrow}</a></div>
        <div><span><strong>{employee.name}</strong></span><br></br><label className='coloring'>{employee.employeeID}</label></div>
        <div><input className="button" type="button" value="print" ></input></div>
      </div>
      <div className="AppointmentInfo">
        <div className='customer-info'>
          <div><strong>{employee.appointmentHead}:</strong><label>{employee.appointment}</label></div>
          <div><strong>{employee.emailHead}:</strong><label>{employee.email}</label></div>
          <div><strong>{employee.phoneHead}:</strong><label>{employee.phone}</label></div>

        </div>
        <div className="order-info">
          <div><srong>{employee.statushead}</srong><br></br><li>{employee.status[0]}</li></div>
          <div><strong>{employee.doorhead}</strong><br></br><label>{employee.door}</label></div>
          <div><strong>{employee.timehead}</strong><br></br><label>{employee.time}</label><label className='coloring'>{employee.timeFixed}</label></div>
        </div>
        <div>
          <div className='product-list'>
            <div><input type="checkbox" className='checkbox' ></input></div>
            <div><img src="https://www.w3schools.com/howto/img_avatar.png" width="100px" height="100px"></img></div>
            <div className='positioning'><span><strong>{employee.delivered}</strong><br></br><label className='coloring'>{employee.content}</label></span>
              <a href='javascript:void(0)' className='rightArrow'>{rightArrow}</a></div>

          </div>



        </div>

      </div>

    </div>



  );
}

export default App;
