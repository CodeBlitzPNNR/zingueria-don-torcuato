import React from "react";
import MainLayout from "../../layout/MainLayout";
import Galeria from '../../components/Galeria'
import Carousel from "../../components/Carousel";
import { ChevronDoubleRightIcon, SunIcon, WalletIcon } from "@heroicons/react/20/solid";

const Pedido = () => {

  const fotos = [
    {
      img: "/img/servicios/pedido/ped1.jpg",
      alt: "pedido 1",
    },
    {
      img: "/img/servicios/pedido/ped2.jpeg",
      alt: "pedido 2",
    },
    {
      img: "/img/servicios/pedido/ped3.JPEG",
      alt: "pedido 3",
    },
    {
      img: "/img/servicios/pedido/ped4.JPEG",
      alt: "pedido 4",
    },
    {
      img: "/img/servicios/pedido/ped5.jpg",
      alt: "pedido 5",
    },
    {
      img: "/img/servicios/pedido/ped6.jpg",
      alt: "pedido 6",
    },
    {
      img: "/img/servicios/pedido/ped7.jpg",
      alt: "pedido 7",
    },
    {
      img: "/img/servicios/pedido/ped8.jpg",
      alt: "pedido 8",
    },
    {
      img: "/img/servicios/pedido/ped9.jpg",
      alt: "pedido 9",
    },
    {
      img: "/img/servicios/pedido/ped10.jpg",
      alt: "pedido 10",
    },
    {
      img: "/img/servicios/pedido/ped11.jpg",
      alt: "pedido 11",
    },
    {
      img: "/img/servicios/pedido/ped12.JPEG",
      alt: "pedido 12",
    },
    {
      img: "/img/servicios/pedido/ped13.JPEG",
      alt: "pedido 13",
    },
    {
      img: "/img/servicios/pedido/ped14.jpg",
      alt: "pedido 14",
    },
    {
      img: "/img/servicios/pedido/ped15.jpg",
      alt: "pedido 15",
    },
    {
      img: "/img/servicios/pedido/ped16.jpg",
      alt: "pedido 16",
    },
    {
      img: "/img/servicios/pedido/ped17.jpg",
      alt: "pedido 17",
    },
    {
      img: "/img/servicios/pedido/ped18.jpg",
      alt: "pedido 18",
    },
    {
      img: "/img/servicios/pedido/ped19.jpg",
      alt: "pedido 19",
    },
    {
      img: "/img/servicios/pedido/ped20.JPEG",
      alt: "pedido 20",
    },
    {
      img: "/img/servicios/pedido/ped21.jpg",
      alt: "pedido 21",
    },
    {
      img: "/img/servicios/pedido/ped22.jpg",
      alt: "pedido 22",
    },
    {
      img: "/img/servicios/pedido/ped23.JPEG",
      alt: "pedido 23",
    },
    {
      img: "/img/servicios/pedido/ped24.JPEG",
      alt: "pedido 24",
    },
    {
      img: "/img/servicios/pedido/ped25.JPEG",
      alt: "pedido 25",
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
                      Trabajos a pedido
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                      Cada trabajo se realiza buscando cumplir con los más altos
                      estándares de calidad y satisfacer las necesidades únicas
                      de nuestros clientes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img
                  className="w-[48rem] max-w-[100%] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem]"
                  src=" /img/sections/pedido.jpg"
                  alt=""
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                    <p>
                    Estos trabajos a pedido suelen requerir terminación en chapa galvanizada y pueden ser de los más variados tipos, entre los cuales se encuentran:
                    </p>
                    <ul role="list" className="mt-8 text-gray-600">                     

                      <li className="flex gap-x-3">
                        <ChevronDoubleRightIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <p className="text-gray-900">
                            Bateas contenedoras de líquidos, como pintura o aceites
                          </p>{" "}                          
                        </span>
                      </li>

                      <li className="flex gap-x-3">
                        <ChevronDoubleRightIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <p className="text-gray-900">
                          Embudos Galvanizados
                          </p>{" "}                          
                        </span>
                      </li>

                      <li className="flex gap-x-3">
                        <ChevronDoubleRightIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <p className="text-gray-900">
                          Baldes Galvanizados 
                          </p>{" "}                          
                        </span>
                      </li>

                      <li className="flex gap-x-3">
                        <ChevronDoubleRightIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <p className="text-gray-900">
                          Cúpulas de Iglesia, terminación en galvanizados y cobre
                          </p>{" "}                          
                        </span>
                      </li>

                      <li className="flex gap-x-3">
                        <ChevronDoubleRightIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <p className="text-gray-900">
                          Pináculos
                          </p>{" "}                          
                        </span>
                      </li>

                      <li className="flex gap-x-3">
                        <ChevronDoubleRightIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <p className="text-gray-900">
                          Artículos de decoración, veletas, guardas de cumbrera
                          </p>{" "}                          
                        </span>
                      </li>

                      <li className="flex gap-x-3">
                        <ChevronDoubleRightIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <p className="text-gray-900">
                          Tapas de tanque
                          </p>{" "}                          
                        </span>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>   
        <section className="bg-gradient-to-b from-slate-950 to-slate-500 h-[50dvh]" >
          <div className="container m-auto px-4 bg-blue-400">
            <h2 className=" font-semibold text-2xl text-white text-center">Galería</h2>
            <Carousel picData={ fotos }/>
          </div>
        </section>
      </MainLayout>
    </main>
  );
};

export default Pedido;
