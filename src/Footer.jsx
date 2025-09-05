import React from 'react'

function Footer() {
  return (
    <>
      <div style={{backgroundColor:'#D3D3D3'}}>
        <div className='container py-3 '>
  
          <div className="row">
            <div className="col-md-3  p-2">
              <h3>Services</h3>
              <p><a href="#">Branding</a></p>
              <p><a href="#">Design</a></p>
              <p><a href="#">Marketing</a></p>
              <p><a href="#">Advertisement</a></p>
  
            </div>
            <div className="col-md-3 p-2">
              <div>
                <h3>Company</h3>
                <p><a href="#">About us</a></p>
                <p><a href="#">Contact</a></p>
                <p><a href="#">Jobs</a></p>
                <p><a href="#">Press kit</a></p>
  
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div>
                <h3>Legal</h3>
                <p><a href="#">Terms of use us</a></p>
                <p><a href="#">Privacy policy</a></p>
                <p><a href="#">Jobs</a></p>
                <p><a href="#"> Cookie policy</a></p>
  
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div>
                <h3>Newsletter</h3>
                <p className='text-primary'>Enter your email address</p>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-primary btn-primary text-light" type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
  
        </div>
      </div>

    </>
  )
}

export default Footer