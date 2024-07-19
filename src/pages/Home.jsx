import React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../layout/MainLayout";
import Card from "../components/Card";
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

export const Home = () => {
  return (
    <main className="w-screen bg-slate-200">
      <Helmet>
        <title>Trabajos de Zinguería | Zinguería Don Torcuato</title>
        <meta name="description" content="Descubre nuestros servicios completos de zinguería para techos. En Zinguería Don Torcuato te ofrecemos experiencia, calidad, confianza y mucho más." />
      </Helmet>
      <MainLayout>
        <div>
          <section className="flex flex-wrap justify-center xl:justify-between max-w-[1400px] m-auto">
            <div className="mt-10">
              <Card
                text={
                  "El reemplazo de las chapas traslúcidas o comunmente llamadas plásticas, es un trabajo que se realiza..."
                }
                title={"Chapas Traslúcidas"}
                img={img1}
                route={"/servicios/chapas"}
              />
            </div>
            <div className="mt-10">
              <Card
                text={
                  "Fabricadas típicamente en metal, PVC o aluminio, estas estructuras se instalan a lo largo del borde..."
                }
                title={"Canaletas"}
                img={img2}
                route={"/servicios/canaletas"}
              />
            </div>
            <div className="mt-10">
              <Card
                text={
                  "Las bandas perimetrales se utilizan para realizar la dilatación entre el techo y los muros de carga..."
                }
                title={"Bandas perimetrales"}
                img={img3}
                route={"/servicios/bandas"}
              />
            </div>
            <div className="mt-10">
              <Card
                text={
                  "Su función principal es mejorar la circulación del aire, eliminar olores no deseados, reducir..."
                }
                title={"Extraccion"}
                img={img4}
                route={"/servicios/extraccion"}
              />
            </div>
            <div className="mt-10">
              <Card
                text={
                  "Las claraboyas o ventanas de techo se pueden instalar sobre distintos tipos de techados..."
                }
                title={"Claraboyas"}
                img={img5}
                route={"/servicios/claraboyas"}
              />
            </div>
            <div className="mt-10">
              <Card
                text={
                  "Cada trabajo se realiza buscando cumplir con los más altos estándares de calidad y satisfacer únicas..."
                }
                title={"Trabajos a pedido"}
                img={img6}
                route={"/servicios/pedido"}
              />
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section
            id="about"
            className="p-4 mt-4 bg-gradient-to-b from-slate-950 to-slate-700 shadow-2xl shadow-black"
          >
            <div className="container flex justify-center place-items-center m-auto gap-10">
              <div className="p-4 text-slate-300">
                <div className="flex flex-col max-w-2xl justify-center items-center px-4">
                  <img
                    src="./img/logoWhite.png"
                    alt="Logo"
                    className="drop-shadow-2xl w-72"
                  />
                  <h2 className="lg:text-2xl text-xl font-semibold text-white my-3">
                    ¿Quienes somos?
                  </h2>
                  <p className="lg:text-lg text-md mb-3 ">
                    Somos una empresa dedicada a la fabricación e instalación de
                    zinguería en general enfocada en brindar servicio a la
                    industria y el comercio.
                  </p>
                  <p className="lg:text-lg text-md">
                    Nuestra amplia experiencia, control de calidad y servicio
                    son el reflejo de nuestros trabajos
                  </p>
                  <p className="lg:text-lg text-md text-slate-300 mt-3">
                    Ofrecemos servicio en el día y a domicilio atendemos en:
                    Capital Federal y zona Norte del gran Buenos Aires. Nos
                    especializamos en: Techos de chapa, colocación de
                    extractores eólicos, reemplazo de chapas plásticas
                    galvanizadas, fibro cemento, provisión y recambio de todo
                    tipo de canaletas y zinguerias en general.
                  </p>
                </div>
                {/* <div className="lg:flex justify-center p-2 bg-white shadow-lg rounded-md hidden">
                <img
                  src={img7}
                  alt="Img Nosotros"
                  className="bg-black rounded-lg"
                />
              </div>               */}
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
