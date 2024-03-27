import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Slider {...settings}>
        <div>
          <Zoom>
            <img
              className=" rounded-xl"
              src="../../img/gallery/can1.JPG"
              alt="Imagen Slider 1"
            />
          </Zoom>
        </div>
        <div>
          <Zoom>
            <img
              className=" rounded-xl"
              src="../../img/gallery/can2.JPG"
              alt="Imagen Slider 2"
            />
          </Zoom>
        </div>
        <div>
          <Zoom>
            <img
              className=" rounded-xl"
              src="../../img/gallery/can3.JPG"
              alt="Imagen Slider 3"
            />
          </Zoom>
        </div>
        <div>
          <Zoom>
            <img
              className=" rounded-xl"
              src="../../img/gallery/can4.JPG"
              alt="Imagen Slider 4"
            />
          </Zoom>
        </div>
        <div>
          <Zoom>
            <img
              className=" rounded-xl"
              src="../../img/gallery/can5.JPG"
              alt="Imagen Slider 5"
            />
          </Zoom>
        </div>
      </Slider>
    </section>
  );
}
