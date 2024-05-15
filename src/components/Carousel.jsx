import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function SimpleSlider({ picData }) {

  var settings = {
    dots: true,    
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,          
          dots: true
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
  }

  return (
    <section>
      <div className="slider-container bg-green-400 p-1">
      <Slider {...settings}>

      {picData.map(({ img, alt }, index) => (
        <div className="bg-red-500 p-1" key={index}>
        <Zoom>          
          <img className="aspect-square" src={img} alt={alt} />
        </Zoom>
      </div>
      ))}         
        
      </Slider>
      </div>
    </section>
  );
}
