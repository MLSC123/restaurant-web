import React, { useEffect, useState } from 'react'

export default function HorizontalCards () {

    const [testimonialsData, setTestimonialsData] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:443/",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json"
          } 
        }
      )
        .then(response => response.json())
        .then((data) => {
            setTestimonialsData(data);

            console.log(testimonialsData);
            console.log(data);
        })
        .catch(error => console.error("Error inesperado al traer la testimonials data: ", error));  

    }, [])
    

  return (
    <>
        <h1 className='font-monospace text-center mt-5 mb-4'> Testimonios de nuestros clientes </h1>
            <div className='container'>
            <div className="row row-cols-1 row-cols-md-2 g-4">
            {
                testimonialsData.map( (testimony) => {
                    return (
                        <div className='col d-flex justify-content-center' key={testimony.id} >
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-4">
                                    <img src="/assets/testimonialsPhotos/testimonialsPhoto1.jpg" className="img-fluid rounded-start" alt="testimony image"/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title"> {testimony.title} </h5>
                                        <p className="card-text"> {testimony.testimony} </p>
                                        <p className="card-text text-muted"> {testimony.dates} </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            </div>
      
    
    </>
  )
}
