import React from 'react'
import './Main.scss'
import Caserol from './Caserol'
import Slider from "react-slick"

import kart1 from '../../assets/images/kart1.jpg'
import kart2 from '../../assets/images/kart2.jpg'
import kart3 from '../../assets/images/kart3.jpg'
import kart4 from '../../assets/images/kart4.jpg'
import kart5 from '../../assets/images/kart5.jpg'
import kart6 from '../../assets/images/kart6.jpg'
import kart9 from '../../assets/images/kart9.jpg'
import kart10 from '../../assets/images/kart10.jpg'
import kart16 from '../../assets/images/kart16.jpg'
import kart11 from '../../assets/images/kart11.jpg'
import kart12 from '../../assets/images/kart12.jpg'
import kart13 from '../../assets/images/kart13.jpg'
import kart14 from '../../assets/images/kart14.jpg'
import kart15 from '../../assets/images/kart15.jpg'

class Main extends React.Component {

    state = {
        card: [kart1, kart2, kart3, kart4, kart5, kart6, kart9, kart10, kart16],
        cardLeft: [kart11, kart12],
        cardRight: [kart13, kart14, kart15]
    }

    render() {

        const settings = {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 1000,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "poster-slider"
        };

        return (
            <main className='wrapper__main'>
                <div className='slider__left'>
                    <div>
                        <h5>Слайдеры для рассылок</h5>
                        <Slider {...settings}>
                            {this.state.card.map((card, index) => {
                                return (
                                    <Caserol style={{ maxWidth: '1000px' }} key={index} img={card} />
                                )
                            })}
                        </Slider>
                    </div>
                </div>
                <div className='slider__right'>
                    <div className='slider'>
                        <h5>Обложки квартальных календарей</h5>
                        <Slider {...settings}>
                            {this.state.cardLeft.map((card, index) => {
                                return (
                                    <Caserol style={{ maxWidth: '1000px' }} key={index} img={card} />
                                )
                            })}
                        </Slider>
                    </div>
                    <div className='slider'>
                        <h5>Плакаты А3-А4</h5>
                        <Slider {...settings}>
                            {this.state.cardRight.map((card, index) => {
                                return (
                                    <Caserol style={{ maxWidth: '1000px' }} key={index} img={card} />
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </main>
        );

    }
}

export default Main