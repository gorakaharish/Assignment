import './Slider.css'
import img1 from '../../assets/img5.png'
import img2 from '../../assets/img6.png'
import img3 from '../../assets/img7.png'
import img4 from '../../assets/img8.png'
import img5 from '../../assets/img9.png'
import Slider from "react-slick";

const Slideer = () => {
    const Data = [
        {
            img:img1,
            titel:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   "
        },
        {
            img:img2,
            titel:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   "
        },
        {
            img:img3,
            titel:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   "
        },
        {
            img:img4,
            titel:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   "
        },
        {
            img:img5,
            titel:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   "
        }
    ]
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <>
       <div className="conatiner-fluid">
        <div className="row">
            <h4 className='Slder-heading ms-2 my-3'>Nursery</h4>
        <Slider {...settings}>
        {
            Data.map((item,index) => (
                <div className='co-12 col-md-3' key={index}>
                    <div className='card border-0 text-center mx-3'>
                       <div className='my-2'>
                       <img src={item.img} alt="" className='w-50 m-auto' />
                       </div>
                        <p className='item-para'>{item.titel}</p>
                    </div>
                </div>
            ))
        }
       </Slider>
        </div>
       </div>
    </>
  )
}

export default Slideer