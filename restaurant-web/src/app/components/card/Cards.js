"use client";
import React, { useEffect, useState } from 'react'
import CardElement from './CardElement'


export default function Cards () {

  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:443/menu', {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then((data) => {
      setMenuData(data);
    })
    .catch(error => console.error("Error inesperado: ", error));
  }, []); // Se utiliza un array vacío para que el efecto se ejecute solo una vez al montar el componente
  
  return (
    <div className="p-5 row row-cols-1 row-cols-md-4 g-3">
      {
        menuData.map((food) => {
            return <CardElement key={food.id} food = {food}/>
        })
      }
    </div>
  )
}
