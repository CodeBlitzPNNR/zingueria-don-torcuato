import React from "react";
import MainLayout from "../../layout/MainLayout";
import Galeria from '../../components/Galeria'
import Carousel from "../../components/Carousel";
import { EyeSlashIcon, LightBulbIcon, SunIcon, WalletIcon } from "@heroicons/react/20/solid";

const Claraboyas = () => {

  const fotos = [
    {
      img: "/img/servicios/claraboyas/cla1.jpg",
      alt: "claraboyas",
    },
    {
      img: "/img/servicios/claraboyas/cla2.jpg",
      alt: "claraboyas",
    },
    {
      img: "/img/servicios/claraboyas/cla3.jpg",
      alt: "claraboyas",
    },
    {
      img: "/img/servicios/claraboyas/cla4.jpg",
      alt: "claraboyas",
    }    
  ];

  return (
    <main className="w-screen">
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
                      Claraboyas o Ventanas de techo
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                      Las claraboyas o ventanas de techo se pueden instalar
                      sobre distintos tipos de techados. Ej. Techos de teja
                      francesa, sobre teja colonial, teja portuguesa pizarra,
                      losa etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img
                  className="w-[48rem] max-w-[100%] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem]"
                  src=" /img/sections/claraboyas.jpg"
                  alt=""
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                    <p>
                      La función principal de las claraboyas es la entrada de
                      luz, además también se fabrican como ventilación para
                      lugares que además de entrada de luz solar requieran
                      ventilación. Ej. Baños o depósitos de mercadería.
                    </p>
                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                      <li className="flex gap-x-3">
                        <LightBulbIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-900">
                            Ahorro energético.
                          </strong>{" "}
                          Al aprovechar la luz del sol, las claraboyas reducen
                          la necesidad de iluminación artificial, lo que se
                          traduce en ahorros significativos en costos de energía
                          a lo largo del tiempo..
                        </span>
                      </li>

                      <li className="flex gap-x-3">
                        <EyeSlashIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-900">
                            Privacidad.
                          </strong>{" "}
                          Las ventanas de techo pueden ofrecer privacidad
                          adicional en comparación con las ventanas
                          tradicionales, al tiempo que proporcionan luz natural
                          sin comprometer la intimidad de los espacios
                          interiores.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>    
        <section className="bg-white p-4" >
          <div className="container m-auto bg-gradient-to-b from-slate-950 to-slate-500 p-10 max-w-[1024px] rounded-3xl">
            <h2 className=" font-bold text-3xl text-white text-center mb-2">Galería</h2>
            <Carousel picData={ fotos }/>
          </div>
        </section>
      </MainLayout>
    </main>
  );
};

export default Claraboyas;
