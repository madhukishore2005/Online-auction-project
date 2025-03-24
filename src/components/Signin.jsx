import { useState } from 'react'

import './Style.css'

function Signin() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Signin</h1>
    <form>
      <input type='text'placeholder='Username' />
      <input type='password'placeholder='password' />
      <button>Signin</button>
    </form>
    </>
  )
}

export default Signin