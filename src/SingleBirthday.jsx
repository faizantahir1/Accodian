import React from 'react'

const SingleBirthday = ({id,name,age,image,remove}) => {
  return (
    <>
    <div className="d-flex align-items-center justify-content-between py-3 gap-2">
        <div className="left">
          <div className="d-flex align-items-center gap-2">
            <div className="image">
              <img style={{width: '100px', height:'100px' , borderRadius:'50%', objectFit:'cover' }} src={image} alt="" />
            </div>
            <div className="user-info ">
            <h5>{name}</h5>
            <h6>{age} years</h6>
            </div>
         </div>
        </div>
        <div className="right">
          <button onClick = {()=> remove(id)} className="btn btn-danger">Remove</button>
        </div>
    </div>
    
    </>
  )
}

export default SingleBirthday