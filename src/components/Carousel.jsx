import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { CenterFocusStrong } from "@mui/icons-material";

export default function SimpleSlider({ picData }) {

  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,    
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,                    
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,          
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  }

  return (
    <section className="p-8">      
      <Slider {...settings}>
      
      {picData.map(({ img, alt }, index) => (
        <div className="p-2 flex" key={index}>
        <Zoom>          
            <img className=" rounded-md max-h-[700px] m-auto" src={img} alt={alt} />          
        </Zoom>
      </div>
      ))}             
      </Slider>      
    </section>
  );
}
