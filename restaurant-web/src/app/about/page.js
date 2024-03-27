'use client';
import { useEffect, useState } from 'react';
import NavBar from '../components/navbar/NavBar';

const fetchDataAbout = async() => {
  try {
    const res = await fetch('http://localhost:443/about', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({ clave: 'valor' }),
    });
    const data = await res.json();
    // console.log(data);
    return data;

  } catch (error) {
    console.error("Error: ", error);
  }
}

export default function AboutPage () {
  const [items, setItems] = useState([{
    id: "2",
    name: "Iron man"
  }]);
  

  
  useEffect(() => {
    // Lógica para obtener elementos desde el servidor Express

    const fetchData = async () => {
      const dataFromFetch = await fetchDataAbout();
      console.log("data", dataFromFetch);
      setItems([...items, dataFromFetch]);
    } 
  
    fetchData();

  
  }, []);

  const idPage = 2;
  return (
    <>
      <NavBar idPage={idPage}/>
      <h1>Lista de Elementos</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}