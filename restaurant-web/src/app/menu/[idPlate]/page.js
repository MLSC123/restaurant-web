"use client";
import React, { useEffect, useState } from 'react'

export default function PlatePage ({params}) {

  const [dataPlate, setDataPlate] = useState({});
  console.log(params);
  useEffect(() => {
    fetch(`http://localhost:443/menu/${params.idPlate}`)
    .then(response => response.json())
    .then((data) => {
      setDataPlate(data);
    })
    .catch(error => console.error("Error inesperado: ", error));
  }, [])
  

  return (
    <>
      <h1>Plate Page</h1>
      <div className="container">
        <div className="row">
          <div className="col-6">

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <img src='/assets/food-placeholder.jpg' className="d-block w-100" alt="temporal"></img>
                </div>
                <div className="carousel-item">
                  <img src="/assets/cooked-food.jpg" className="d-block w-100" alt="placeholder"></img>
                </div>
                <div className="carousel-item">
                  <img src="/assets/temporal-img.png" className="d-block w-100" alt="placeholder"></img>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            </div>

            

          </div>
          <div className="col-6">
            <h2> {dataPlate.name} </h2>
            <h4 className='text-muted'> {dataPlate.price} </h4>
            <p> {dataPlate.description} </p>
            
          </div>
        </div>
      </div>
    </>
    
    
  )
}
