import { useState } from 'react'
function Dashboard() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div class="container sign">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card shadow-lg p-4">
        <h2 class="text-center mb-4">Post Auction</h2>
        <form class="row g-3">
        <div class="mb-3">
            <label for="formFile" class="form-label">Upload auction</label>
            <input class="form-control" type="file" id="formFile"/>
        </div>
        <div class="col-md-12">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" required/>
        </div>
        <div class="mb-3">
            <label for="Textarea1" class="form-label">Description</label>
            <textarea class="form-control" id="Textarea1" rows="3"></textarea>
        </div>
        <div class="col-12 text-center">
            <button type="submit" class="btn btn-primary w-50">Upload</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Dashboard