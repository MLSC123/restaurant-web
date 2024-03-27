"use client";
import Link from 'next/link';
import React from 'react'



export default function CardElement ({food}) {
  const {name, price, id, category} = food;
  return (

    <div className="col">
        <div className="card">
        <img src="/assets/foodImgs/food-placeholder.jpg" className="card-img-top" alt="placeholder-image"/>
        <div className="card-body">
            <h5 className="card-title text-center pt-2 pb-2">{name}</h5>
            <h5 className="text-muted text-center pt-2 pb-2">Price: {price}</h5>
            <div className="d-grid">
              <Link className='btn btn-danger p-1' href={`/${category}/${id}`} >More Details</Link>
            </div>
        </div>
        </div>
    </div>

  )
}
