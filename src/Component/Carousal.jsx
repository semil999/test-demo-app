import React from 'react'
import Slider from 'react-slick'

const Carousal = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        
    };
    const ary = ['/images/img1.png','/images/img2.png','/images/img3.png','/images/img4.png','/images/img5.png','/images/img6.png']
  return (
    <>
      <div className='text-center container'>
        <h2>Carousal</h2>
        <Slider {...settings}>
            {
                ary?.map((x,i) => {
                    return <div key={i}>
                        <img src={x} alt="" className='img-fluid' />
                    </div>
                })
            }
        </Slider>
      </div>
    </>
  )
}

export default Carousal
