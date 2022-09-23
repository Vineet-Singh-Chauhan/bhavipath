import React from 'react'
//splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

//image
import image from "../../../images/image1.jpg"

const Scourosel = () => {
    return (
        <div>
            <Splide aria-label="My Favorite Images" options = {{
                type: 'loop',
                focus: 'center',
                autoWidth: true,
                speed: 1000,
                easing: 'cubic-bezier(0.25, .1, 0.25, 1)',
                isNavigation: true,
                gap: '5rem',
                arrows: false,
            }}>
                <SplideSlide>
                <img src={image} alt="Image 2" />
                </SplideSlide>
                <SplideSlide>
                <img src={image} alt="Image 2" />
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Scourosel