import SingleBirthday from './SingleBirthday'
import { bday } from './data'
import {useState} from "react"

const Birthday = () => {
  const [data , setData] = useState(bday)
  const removeBDay = (id) => {
     const newBDay = data.filter ((item)=>{
        return item.id != id 
     })
     setData(newBDay)
  }
    return (
    <>
    <div className="container col-lg-7 mx-auto shadow rounded-4 py-4">
        <h1 className="text-center display-4">{data.length} Birthday today</h1>
        <div className="container">
            {data.map((items)=>{
              return <SingleBirthday key={items.id} {...items} remove={removeBDay}/>
            })}
        </div>
        <button onClick={data.length === 0 ? ()=> setData (bday)  :()=> setData ([])} className={"btn ${data.length === 0 ? btn-warning : btn-danger} mx-auto d-block"}>{data.length === 0 ? 'Refresh All': 'Remove All' }</button>
    </div>
    </>
  )
}

export default Birthday