import React, { Component } from 'react';
import Slider from 'react-slick';
import ColorChart from '../containers/ColorChart';
import GenderChart from '../containers/GenderChart';
import AgeChart from "../containers/AgeChart";
import SizeChart from "../containers/SizeChart";

class SliderComponent extends Component {
    render () {
        var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true
        };
        return (
            <Slider {...settings}>
            <div><SizeChart /></div>
            <div><ColorChart /></div>
            <div><AgeChart /></div>
            <div><GenderChart /></div>
        </Slider>
        );
    }
}

export default SliderComponent;