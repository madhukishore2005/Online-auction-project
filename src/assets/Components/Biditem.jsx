import { useState } from 'react'
import './Style.css'

function Biditem() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className="container dashboard-container text-center">
        <div className="row">
          <div className="col-3" style={{height: "500px"}}>
            <div className="card" style={{height: "400px"}}>
            <h5 className="card-title">Apple iphone 16e</h5>
                <img  src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS8lqiCVzsh0yPNjsFm1tOOfFHZ1vEn649GpKFkFvD5h4tebEf3eH_bvhC7Z0vzxDr3TLeweVf5XA5CZrXSbm7Yw8s4Gup51WsrmuwbHA0IMpU3tUacGCe7AF8" className="card-img-top"  alt="..."/>
                <div className="card-body">
                <a href="#" class="btn btn-primary">BID</a>
                </div>
              </div>
          </div>
          <div className="col-3" style={{height: "500px"}}>
            <div className="card" style={{height: "400px"}}>
            <h5 className="card-title">Noise Halo 2 Smartwatch</h5>
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQPlDwam9Lk8T3S5y5t3HBkMxF0uJTmtagQG7JOzdCQWTPK8YENJVIPRKWTkdM397qJpxqj-lt4Q04jEeXNvSVcS96wc89eGhXkgbbvoRmjRdLZ-XK2s0dudQ" className="card-img-top" alt="..."/>
                <div className="card-body">
                 <a href="#" class="btn btn-primary">BID</a>
                </div>
            </div>
          </div>
          <div className="col-3" style={{height: "500px"}}>
            <div className="card" style={{height: "400px"}}>
            <h5 className="card-title">Yezdi Roadster</h5>
                <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKJiMYW-QPWSk3LmcNSyZOzw83XcUTOl8-GKcWG9awabNC3d6JmoqJ9fIORMnK1j-FSk0T068xNyPDzcX2V0DhDEkY-QNzM4PeN29OLCwfuPoxBUTIDuQGAg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <a href="#" class="btn btn-primary">BID</a>
                </div>
              </div>
          </div>
          <div className="col-3" style={{height: "500px"}}>
            <div className="card" style={{height: "400px"}}>
            <h5 className="card-title">Fabric Recliner</h5>
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQzZ0LZlbamXBWK1SsQodshGKV-vVEFqaT5eIe6phZFtl-_2h4Mt0MItK6Isms9LAeMKKcKmSPSSqyfxF53W3o2kZpbS2aEVs8-dKcXwcoR" className="card-img-top" alt="..."/>
                <div className="card-body">
                <a href="#" class="btn btn-primary">BID</a>
                </div>
              </div>
          </div>
          <div className="col-3" style={{height: "500px"}}>
            <div className="card" style={{height: "400px"}}>
            <h5 className="card-title">Altura Two-Tone Coffee Table</h5>
                <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTa3hcfzMdW18U3LSaorsJCfl5CJAQaQEht8cVjomp_8DzI1Mb--O9ke7LyaG2Zc-dn8Y7NRW47JFKv1n7FCr7uSLnocrqjzjsTjKW794qPWSsNKZ-VOJC" className="card-img-top" alt="..."/>
                <div className="card-body">
                <a href="#" class="btn btn-primary">BID</a>
                </div>
              </div>
          </div>
          <div className="col-3" style={{height: "500px"}}>
            <div className="card" style={{height: "400px"}}>
            <h5 className="card-title">Prestige Atlas Neo Induction Cooktop</h5>
                <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmsGCGStkdu5w833bMTQSdjskxVdGwhJOiDjPHTiG6nL3tQVptdmPhXHkQD1_vwe1YPV3XfEX9Qwz02xdVF_b7rq-2w3odER1yl6MC25RPG0TOlTO5nMo0BQ" className="card-img-top" alt="..."/>
                <div className="card-body">
                <a href="#" class="btn btn-primary">BID</a>
                </div>
              </div>
          </div>
          <div className="col-3" style={{height: "500px"}}>
            <div className="card" style={{height: "400px"}}>
            <h5 className="card-title">4 Door Wardrobe</h5>
                <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTI48jLWIRhaE8nmJsjWCFg4P0q3tfyO_vN2eZEBztSiN4MTqQiZn9rT3804dIIAJ_eFWhK5rlzyINleUHZee1SS5v-zoaIwsOJD8E7bWX7" className="card-img-top" alt="..."/>
                <div className="card-body">
                <a href="#" class="btn btn-primary">BID</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Biditem