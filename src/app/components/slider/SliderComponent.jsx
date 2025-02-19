import { Children } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderComponent({ children }) {
   
    return (
        <Slider {...settings}>
            {
                Children.map(child => {
                    return <div>{child}</div>
                })
            }
        </Slider>
    );
}