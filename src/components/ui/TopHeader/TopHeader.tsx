import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function TopHeader() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    centerMode: true,
    autoplaySpeed: 1000,
    className: 'layout__topHeader',
    centerPadding: '0px',
  }

  return (
    <div>
      <Slider {...settings}>
        <div>
          <p>¡Haz seguimiento de tu pedido aquí!</p>
        </div>
        <div />
        <div>
          <p>¡Revisa nuestra guía de tallas aquí!</p>
        </div>
        <div />
      </Slider>
    </div>
  )
}
