import React from "react";
import MainLayout from "../layout/MainLayout";
import Card from "../components/Card";
import "./Home.css";
import Logo1 from "/img/partners/LogoRefer1.png";
import Logo2 from "/img/partners/LogoRefer2.png";
import Logo3 from "/img/partners/LogoRefer3.svg";
import Logo4 from "/img/partners/LogoRefer4.png";
import Logo5 from "/img/partners/LogoRefer5.png";
import Logo6 from "/img/partners/LogoRefer6.png";
import Logo7 from "/img/partners/LogoRefer7.png";
import Logo8 from "/img/partners/LogoRefer8.png";
import img1 from "/img/chapas.jpg";
import img2 from "/img/canaletas.jpg";
import img3 from "/img/bandas.jpg";
import img4 from "/img/eolicos.jpg";
import img5 from "/img/claraboyas.jpg";
import img6 from "/img/pedido.jpg";
import img7 from "/img/about.jpg";

export const Home = () => {
  return (
    <main className="w-screen bg-slate-200">
      <MainLayout>
        <div>
          <section className="p-4 flex flex-wrap justify-between gap-8 max-w-[1400px] m-auto">
            <Card
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis sunt explicabo laborum quod itaque."
              }
              title={"Chapas Traslúcidas"}
              img={img1}
              route={"/servicios/chapas"}
            />
            <Card
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis sunt explicabo laborum quod itaque."
              } 
              title={"Canaletas"}
              img={img2}
              route={"/servicios/canaletas"}
            />
            <Card
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis sunt explicabo laborum quod itaque."
              }
              title={"Bandas perimetrales"}
              img={img3}
              route={"/servicios/bandas"}
            />
            <Card
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis sunt explicabo laborum quod itaque."
              }
              title={"Extraccion"}
              img={img4}
              route={"/servicios/extraccion"}
            />
            <Card
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis sunt explicabo laborum quod itaque."
              }
              title={"Claraboyas"}
              img={img5}
              route={"/servicios/claraboyas"}
            />
            <Card
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis sunt explicabo laborum quod itaque."
              }
              title={"Trabajos a pedido"}
              img={img6}
              route={"/servicios/pedido"}
            />
          </section>

          {/* ABOUT SECTION */}
          <section
            id="about"
            className="h-screen max-h-[800px] p-4 mt-4 bg-gradient-to-b from-slate-950 to-slate-700 shadow-2xl shadow-black"
          >
            <div className="container m-auto flex items-center h-full">
            <div className="flex justify-center w-[3200px]">
              <img src={img7} alt="Img Nosotros" className="bg-black rounded-lg w-[100%]" />
            </div>
            <div className="p-4 max-h-[60%] h-full my-auto flex flex-col justify-around text-xl text-slate-300 gap-4">
              <div className="container m-auto h-full flex items-center justify-center">
                <img
                  src="./img/logoWhite.png"
                  alt="Logo"
                  className="drop-shadow-2xl w-[350px]"
                />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2">
                ¿Quienes somos?
              </h2>
              <p className="text-lg">
                Somos una empresa dedicada a la fabricación e instalación de
                zinguería en general enfocada en brindar servicio a la industria
                y el comercio. .
              </p>
              <p className="text-lg">
                Nuestra amplia experiencia, control de calidad y servicio son el
                reflejo de nuestros trabajos
              </p>
              <p className="text-lg">
                Ofrecemos servicio en el día y a domicilio atendemos en: Capital
                Federal y zona Norte del gran Buenos Aires. Nos especializamos
                en: Techos de chapa, colocación de extractores eólicos,
                reemplazo de chapas plásticas galvanizadas, fibro cemento,
                provisión y recambio de todo tipo de canaletas y zinguerias en
                general.
              </p>
            </div>
            </div>
          </section>
          <div className="px-4 py-12 rounded-lg my-2">
            <div className=" grid grid-cols-2 lg:grid-cols-4 place-items-center">
              <img
                className="w-full max-w-[50%] p-1"
                src={Logo1}
                alt="Logo Partners"
              />
              <img
                className="w-full max-w-[50%] p-1"
                src={Logo2}
                alt="Logo Partners"
              />
              <img
                className="w-full max-w-[50%] p-1"
                src={Logo3}
                alt="Logo Partners"
              />
              <img
                className="w-full max-w-[50%] p-1"
                src={Logo4}
                alt="Logo Partners"
              />
              <img
                className="w-full max-w-[50%] p-1"
                src={Logo5}
                alt="Logo Partners"
              />
              <img
                className="w-full max-w-[50%] p-1"
                src={Logo6}
                alt="Logo Partners"
              />
              <img
                className="w-full max-w-[50%] p-1"
                src={Logo7}
                alt="Logo Partners"
              />
              <img
                className="w-full max-w-[50%] p-1"
                src={Logo8}
                alt="Logo Partners"
              />
            </div>
          </div>
        </div>
      </MainLayout>
    </main>
  );
};
