import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {

  const settings = {
    //dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        <div className='!flex items-center bg-gray-100'>
          <div className='px-4'>
            <div className='text-4xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-base my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod eligendi, distinctio, vitae possimus sint perspiciatis, cumque enim quas accusamus rem voluptatum laborum deserunt. Iure aperiam eum illum aspernatur laudantium.</div>
            <div className='flex justify-end me-5 mt-10'>
              <div className='border rounded-full cursor-pointer text-xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
          </div>
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c359886f-1c4f-4a0f-9930-ba0c519de7f7/air-force-1-07-mid-ayakkab%C4%B1s%C4%B1-FJgWFP.png" alt="" />
        </div>
        <div className='!flex items-center bg-gray-100'>
          <div className='px-4'>
            <div className='text-4xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-base my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod eligendi, distinctio, vitae possimus sint perspiciatis, cumque enim quas accusamus rem voluptatum laborum deserunt. Iure aperiam eum illum aspernatur laudantium.</div>
            <div className='flex justify-end me-5 mt-10'>
              <div className='border rounded-full cursor-pointer text-xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
          </div>
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/235ac5d0-14fa-4372-a821-a4c0d95e5426/court-vision-low-next-nature-ayakkab%C4%B1s%C4%B1-hD1DFB.png" alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default SliderComp