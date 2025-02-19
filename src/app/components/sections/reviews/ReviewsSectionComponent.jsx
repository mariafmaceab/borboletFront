"use client"
import React from 'react'
import style from './ReviewsSection.module.css'
import ReviewsComponent from '@/app/components/cards/reviews/ReviewsComponent'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
    return (
        <div className={style.nextArrow} onClick={onClick}>
            <FaArrowRight />
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className={style.prevArrow} onClick={onClick}>
            <FaArrowLeft />
        </div>
    );
};

const ReviewsSectionComponent = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };
    return (
        <section className={style.sectionTestimonios}>
            <p className={style.tituloTestimonios}>¿Qué dicen nuestros clientes?</p>
            <div className="slider-container">
                <Slider {...settings}>
                    <ReviewsComponent index={1} reviewData={{ username: "Carolina Mena", city: "Medellín", imageLink: "https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/testimonio1.jpeg", text: "Espectacularessss, muchas gracias me encantaron demasiado" }} />
                    <ReviewsComponent index={2} reviewData={{ username: "Maria", city: "Bogotá", imageLink: "https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/testimonio2.jpg", text: "Acabo de probarme el collar y solo puedo decir, 20/10. Fue mejor de lo que me imagine!! Y los colores que yo queria...🤭 muchas gracias!!" }} />
                    <ReviewsComponent index={3} reviewData={{ username: "Sofia Marín", city: "Medellín", imageLink: "https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/testimonio5.jpg", text: "Mis aretes han sido lo más admirado de este mundo, gracias por mis Monarcas. No pasa uno desapercibido, eso si es seguro, los amé!!" }} />
                    <ReviewsComponent index={4} reviewData={{ username: "Carmenza", city: "Medellín", imageLink: "https://pub-973570666b3f4d6da48e4aafb394e236.r2.dev/testimonio3.jpg", text: "Estas aretas le dan el toquecito perfecto a mis outfits, hacen una diferencia enorme" }} />
                </Slider>
            </div>
        </section>
    )
}

export default ReviewsSectionComponent