import React from 'react';
import './Postview.css';
import { useState ,useEffect} from 'react';



const url="http://localhost:3004/user";
 const Postview=()=> {
  const [post,setPost]=useState([]);
  const [count1,setCount1]=useState(96)
  const [count2,setCount2]=useState(64)
  const [count3,setCount3]=useState(25)
  const date=new Date()
let dat=date.getDate()
let month=date.getMonth()
let year=date.getFullYear()
let hour=date.getHours()
let min=date.getMinutes()
let sec=date.getSeconds()
let milli=date.getMilliseconds()
  var time=`${dat}-${month}-${year}`
  
  useEffect (()=>{
     fetch(`${url}`).then((res)=>res.json())
     .then((res)=>{
    setPost(res);
    console.log(res)})},[])
    


    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6mlbwWHU60TQdkwlZEwOxeKsX9I3vF_kOmw&usqp=CAU


   return (
    
    <div className="site-container">
       <div className='header-container' height="60px">
        <div className='poster-name'><img src="https://www.best4webdesign.com/wp-content/uploads/2013/08/550x440xColumn.jpg.pagespeed.ic_.zn34XiSUat.jpg" alt="logo" width="30px" height='30px'/><strong className="app-name">InstaClone</strong>
          </div>
        <div className='about'><a href="#" className='anchor'><img src="https://tse3.mm.bing.net/th?id=OIP.yQiTKx6oPKPTBPO9sXmb1AHaHa&pid=Api&P=0&w=177&h=177" atlt="camera" width="30px" height="30px"/></a></div>
        </div> 
        {post.map(item=>{
          return (
                  
          <div className='post-container'>
              <div className='post-header'>
                <div><strong>{item.name}</strong><br></br><label className='grey'>{item.location}</label></div>
                  <div><a href="#">...</a></div>
                </div>
                <div className='post-img'>
                  <img src={item.PostImage} width="100%" height='300px'></img>
                </div>
                <div className='post-info'>
                  <div><img className='icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrnNHHxDj8E-QoVaNPl2Zssg_AYIZsWywByA&usqp=CAU" width="20px" height="20px"></img>
                  <img className='icon'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWOtsN3U8Bz52EOTd0avYTmihOXUrEM4MOQ&usqp=CAU" width="20px" height="20px"></img><br></br><label className='grey'>{item.likes}</label></div>
                  <div>{time}</div>
                </div>
                
              <div className='post-footer'>
                  <div><strong>{item.description}</strong></div>
              </div>
              </div> 

           
          )
        })}

       
       
      
     </div>
  );
}

export default Postview;
