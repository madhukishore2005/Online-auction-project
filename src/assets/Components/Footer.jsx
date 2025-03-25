import { useState } from 'react'
import './Style.css'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card text-center">
        <div className="card-header">
         <h1>Online auction platform</h1>
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{color: "blue"}}>Contact us at:</h5>
          <p className="card-text">Email:onlineauction@gmail.com</p>
          
        </div>
        <div className="card-footer text-body-secondary">
          <p>Thank You For Visiting Our Website</p>
        </div>
      </div>
    </>
  )
}

export default Footer