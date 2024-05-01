import React from 'react'
import SingleAccodian from './SingleAccodian'
import { FAQs } from './data'

const Accodian = () => {
  return (
    <>
    
       <div className="container col-lg-7 mx-auto shadow p-4 ">
       <h1 className="display-5 text-center">Accodians</h1>
       {FAQs.map((items) => {
        return <SingleAccodian key={items.id} {...items} />
       })}
       
       
       </div>
    
    </>
  )
}

export default Accodian