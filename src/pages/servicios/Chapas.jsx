import React from "react";
import { Helmet } from "react-helmet";
import Carousel from "../../components/Carousel";
import MainLayout from "../../layout/MainLayout";
import { SunIcon, WalletIcon } from "@heroicons/react/20/solid";

const Chapas = () => {

  const fotos = [
    {
      img: "/img/servicios/chapas/cha1.jpg",
      alt: "chapas 1",
    },
    {
      img: "/img/servicios/chapas/cha2.jpg",
      alt: "chapas 2",
    },
    {
      img: "/img/servicios/chapas/cha3.jpg",
      alt: "chapas 3",
    },
    {
      img: "/img/servicios/chapas/cha4.jpg",
      alt: "chapas 4",
    },
    {
      img: "/img/servicios/chapas/cha5.jpg",
      alt: "chapas 5",
    },
    {
      img: "/img/servicios/chapas/cha6.jpg",
      alt: "chapas 6",
    },
    {
      img: "/img/servicios/chapas/cha7.JPG",
      alt: "chapas 7",
    },
    {
      img: "/img/servicios/chapas/cha8.jpg",
      alt: "chapas 8",
    },
    {
      img: "/img/servicios/chapas/cha9.jpg",
      alt: "chapas 9",
    }    
  ];      

  return (
    <main className="w-screen">
      <Helmet>
        <title>Chapas traslúcidas para techos | Zinguería Don Torcuato</title>
        <meta name="description" content="En Zinguería Don Torcuato renovamos las chapas traslúcidas de tu espacio para mejorar luz y evitar filtraciones, mediante materiales modernos y duraderos." />
      </Helmet>
      <MainLayout>
        <section className="">
          <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <svg
                className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                    width={150}
                    height={150}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                  <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                    strokeWidth={1}
                  />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                />
              </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-indigo-600">
                      Zinguería Don Torcuato
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Chapas traslúcidas
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                      El reemplazo de las chapas traslúcidas o comúnmente
                      llamadas plásticas, es un trabajo que se realiza luego de
                      un tiempo, cuando las chapas cumplen su ciclo de uso y ya
                      no permiten la entrada de luz, además de generar
                      filtraciones.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img
                  className="w-[48rem] max-w-[100%] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem]"
                  src=" /img/sections/chapas.jpg"
                  alt=""
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                    <p>
                      Comúnmente se instalan en galpones donde las grandes
                      extensiones de metros cuadrados cubiertos necesitan de luz
                      natural para el desarrollo de la actividad y el ahorro de
                      energía eléctrica.
                    </p>
                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                      <li className="flex gap-x-3">
                        <WalletIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-900">
                            Versatilidad.
                          </strong>{" "}
                          Existen diferentes tipos de materiales, desde los
                          tradicionales de fibra de vidrio hasta materiales más
                          modernos como el policarbonato, el acrílico o el
                          polipropileno. Este último es el más usado debido a la
                          relación costo/resistencia.
                        </span>
                      </li>

                      <li className="flex gap-x-3">
                        <SunIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-900">
                            Eficiencia energética.
                          </strong>{" "}
                          Las chapas traslúcidas permiten el paso de la luz natural, reduciendo la dependencia de la iluminación artificial y disminuyendo así el consumo de energía eléctrica.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-b from-slate-950 to-slate-500">
          <div className="container m-auto px-4">
            <h2 className=" font-semibold text-4xl text-white text-center">Galería</h2>
            <Carousel picData={ fotos }/>
          </div>
        </section>
      </MainLayout>
    </main>
  );
};

export default Chapas;
