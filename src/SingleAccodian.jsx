import React, { useState } from 'react'
import { FaMinus } from 'react-icons/fa';
import { FiPlus } from "react-icons/fi";

const SingleAccodian = ({question,answer}) => {
    const [show,setShow] = useState (false);
    return (
    <>
     <div className="p-3 container bg-light d-flex justify-content-between">
        <div className="data">
        <h5>{question}</h5>
        {show && <p className="text-secondary">
           {answer}
        </p>}
        </div>
        <div className="icons">
            {show ? <FaMinus size={20} cursor='pointer' onClick ={()=>setShow(false)} /> : < FiPlus size={20} cursor='pointer' onClick={()=>setShow(true)} />}
        </div>
     </div>
    
    </>
  )
}

export default SingleAccodian