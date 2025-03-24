import { useState } from 'react'

import './Style.css'

function Signup() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Signup</h1>
    <form>
      <input type='text' placeholder='Username' />
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <button>Signup</button>
    </form>
    </>
  )
}

export default Signup