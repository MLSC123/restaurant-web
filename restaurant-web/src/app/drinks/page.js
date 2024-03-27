import React from 'react'
import NavBar from '../components/navbar/NavBar';
import VerticalCards from '../components/cards/VerticalCards';



export default function Drinks ()  {
    const idPage = 1;
    const category = "drinks";
    return (
        <>
            <NavBar idPage={idPage}/>
            <VerticalCards category={category}/>
        </>
    )
}
