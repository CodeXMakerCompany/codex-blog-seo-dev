import React from 'react'
import Carousel from 'react-multi-carousel';
import { CarouselItem } from "./carousel.item";
import 'react-multi-carousel/lib/styles.css';

import data from "../categories.data";

const responsive = {
  superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
  },
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
  }
};
export const CarouselComponent = () =>{

  return (
    <Carousel
    swipeable={true}
    draggable={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    arrows={false}
    customTransition="all .5"
    transitionDuration={1000}
    > 
     
      {data.map((item, index) => (
        <CarouselItem key={index} props={item} />
       
      ))}
    </Carousel>
  );
}