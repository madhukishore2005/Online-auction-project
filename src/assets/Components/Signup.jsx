import { useState } from 'react'
function Signup() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div class="container sign">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card shadow-lg p-4">
        <h2 class="text-center mb-4">Sign Up</h2>
        <form class="row g-3">
          <div class="col-md-12">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4"required/>
          </div>
          <div class="col-md-12">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4" required/>
          </div>
          <div class="col-12 text-center">
            <button type="submit" class="btn btn-primary w-50">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Signup