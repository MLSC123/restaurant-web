import React from 'react'

import VerticalCards from '../components/cards/VerticalCards';
import NavBar from '../components/navbar/NavBar';


export default function Foods() {
  const idPage = 1;
  const category = "foods";
  return (
    <>
        <NavBar idPage={idPage}/>
        <VerticalCards category={category}/>
    </>
  )
}
