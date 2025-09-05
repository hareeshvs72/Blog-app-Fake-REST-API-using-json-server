import React from 'react'

function LatestBlog() {
  return (
    <>
      <div className='container'>
        <h1>Latest Blog</h1>
        <div className="row">
          <div className="col-md-3 my-2">

            <div className="card" style={{width:"18rem" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqur8ZPKPFMobCjSBJN7dOcn-fn8SRjVnreg&s" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" className="text-primary ">tags</a>
                </div>
            </div>

          </div>
        
        </div>
      </div>
    </>
  )
}

export default LatestBlog