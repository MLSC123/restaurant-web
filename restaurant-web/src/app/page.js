'use client';

import NavBar from './components/navbar/NavBar';
import Caroussel from './components/caroussel/Caroussel';
import HorizontalCards from './components/cards/HorizontalCards';
 

import Footer from './components/footer/Footer';
export default function RootComponent () {

  const pathImages = [
    "/assets/restaurantPhotos/restaurantPhoto1.jpg",
    "/assets/restaurantPhotos/restaurantPhoto2.jpg",
    "/assets/restaurantPhotos/restaurantPhoto3.jpg"
  ]

  const idPage = 0;
  return (
    <>
      <NavBar idPage={idPage}/>
      <Caroussel pathImages = {pathImages}/>
      <HorizontalCards/>
      <hr/>
      <Footer/>
    </>
  )
}