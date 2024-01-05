import React from 'react'

function Carousel() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-caption" style={{zIndex:"2"}}>
            <form className="d-flex justify-content-center" role="search">
             <input className="c-input form-control text-white me-2 w-50 " style={{background: "rgba(255,255,255,0.3)",border:"2px solid white"}} type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn bg-success text-white btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://source.unsplash.com/1500x350/?pasta" style={{objectFit:"contain",filter:"brightness(50%"}} className="d-block w-100" alt="..."/>
                
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/1500x350/?burger" style={{filter:"brightness(50%"}} className="d-block w-100" alt="..."/>
                
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/1500x350/?pizza" style={{filter:"brightness(50%"}} className="d-block w-100" alt="..."/>
                
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </div>
  )
}

export default Carousel
