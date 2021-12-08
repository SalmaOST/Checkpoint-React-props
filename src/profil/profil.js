import React from 'react'

const Profile = props =>{
  
     return (
       <div className="Text">
       <h3> {props.fullname}  </h3>
       <h5>{props.bio} </h5> 
       <h5> {props.profession} </h5>
       <p> {props.children}</p>
       </div>
     )
    }



export default Profile 

Profile.defaultProps={
  fullname:"Salma Omar Saleh Toure",
  bio:"Salma is a student in Web development and Civil Engineering-She's a very attractive and passionate . With her , you're futur is on good hands",
  profession:"She's a student",
}



