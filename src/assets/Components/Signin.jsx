import { useState } from 'react'
import './Style.css'

function Signin() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="container sign ">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card shadow-lg p-4">
        <h2 class="text-center mb-4">Sign In</h2>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4"required/>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4" required/>
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required/>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity" required/>
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select"required>
              <option selected>Choose...</option>
              <option>Andhra Pradesh</option>
              <option>Telangana</option>
              <option>Karnataka</option>
              <option>Tamil Nadu</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip" required/>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" required/>
              <label class="form-check-label" for="gridCheck">
                I agree to the terms and conditions
              </label>
            </div>
          </div>
          <div class="col-12 text-center">
            <button type="submit" class="btn btn-primary w-50">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Signin