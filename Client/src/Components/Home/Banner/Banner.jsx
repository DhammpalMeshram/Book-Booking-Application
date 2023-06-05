import './Banner.css';
import React from 'react';

import { bannerData } from '../../../Constants/Data';

// import from carousal 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//materila ui imports
import FlareIcon from '@mui/icons-material/Flare';

// function to decide how many items to show on corausal
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Banner =()=>{
    return (
      <div className="container">
          <div className='glow'>
            <FlareIcon/>
            <i>Most Polpular of all time</i>
            <FlareIcon/>
          </div>
          <Carousel 
              responsive={responsive}
              swipeable={false}
              draggable={false}
              showDots={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              containerClass="carousel-container"
          >
              { bannerData.map(data=>{
                  return (<img src={data.url} width={"400px"} alt="bannerImage" key="data.id"/>)
                })
              }
          </Carousel> 
        </div>
    )
}

export default Banner;