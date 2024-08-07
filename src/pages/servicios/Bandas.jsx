import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Carousel from "../../components/Carousel";
import {
  CloudArrowDownIcon,
  LockClosedIcon,  
} from "@heroicons/react/20/solid";



const Bandas = () => {
  const fotos = [
    {
      img: "/img/servicios/bandas/ban1.jpg",
      alt: "bandas 1",
    },
    {
      img: "/img/servicios/bandas/ban2.jpg",
      alt: "bandas 2",
    },
    {
      img: "/img/servicios/bandas/ban3.jpg",
      alt: "bandas 3",
    },
    {
      img: "/img/servicios/bandas/ban4.jpg",
      alt: "bandas 4",
    },
    {
      img: "/img/servicios/bandas/ban5.JPEG",
      alt: "bandas 5",
    },
    {
      img: "/img/servicios/bandas/ban6.JPEG",
      alt: "bandas 6",
    },
    {
      img: "/img/servicios/bandas/ban7.jpg",
      alt: "bandas 7",
    },
    {
      img: "/img/servicios/bandas/ban8.jpg",
      alt: "bandas 8",
    },
    {
      img: "/img/servicios/bandas/ban9.jpg",
      alt: "bandas 9",
    },
    {
      img: "/img/servicios/bandas/ban10.jpg",
      alt: "bandas 10",
    }                 
  ];

  return (
    <main className="w-screen">
       <Helmet>
        <title>Bandas perimetrales para techos | Zinguería Don Torcuato</title>
        <meta name="description" content="En Zinguería Don Torcuato ofrecemos bandas perimetrales que evitan filtraciones y corrosiones, permitiendo la dilatación entre techo y muros." />
      </Helmet>
      <MainLayout>
        <section>
          <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 container m-auto w-[100%]">
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
            <div className="p-2 grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div>
                    <p className="text-base font-semibold leading-7 text-indigo-600">
                      Zinguería Don Torcuato
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Bandas perimetrales y cantoneras
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                      Las bandas perimetrales se utilizan para realizar la
                      dilatación entre el techo y los muros de carga.
                      <br />
                      La chapa es un material que sufre diferencias de
                      temperatura, si se embute en los muros, estos con el
                      tiempo se rajan y producen filtraciones.
                    </p>
                  </div>
                  <div className="flex items-center pt-4">
                  <Link to={'/contacto'} className="bg-blue-800 rounded-lg px-4 py-2 font-semibold text-white">Conocer más</Link>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img
                  className="w-[48rem] max-w-[100%] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem]"
                  src="/img/sections/bandas.jpg"
                  alt=""
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                    <p>
                      Estas zinguerías permiten que los muros trabajen en forma
                      independiente del techado. Se utilizan en techos de chapa
                      y en distintos tipos de teja. También cuando no hay muros
                      de carga que pasen el nivel de los techados estas
                      terminaciones se realizan con cantoneras o cupartinas.
                      <br />
                      <br />
                      Estas zinguerías cubren los espacios que se generan entre
                      la chapa, la clavadera o perfilería (En el caso de los
                      galpones) y las paredes de mampostería o revestimientos.
                      Esta Zinguerías evita la entrada de agua, insectos, y
                      tierras dentro de los entretechos.
                    </p>

                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                      <li className="flex gap-x-3">
                        <LockClosedIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-900">
                            Sellado hermético.
                          </strong>{" "}
                          Las bandas perimetrales proporcionan un sellado
                          hermético en los bordes del techo o pared, evitando la
                          entrada de agua, viento, bichos u otros elementos que
                          podrían causar daños estructurales o filtraciones en
                          el interior del edificio..
                        </span>
                      </li>

                      <li className="flex gap-x-3">
                        <CloudArrowDownIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-900">
                            Protección contra la corrosión.
                          </strong>{" "}
                          Fabricadas con materiales resistentes a la corrosión,
                          como el acero galvanizado o el aluminio, las bandas
                          perimetrales ofrecen una protección duradera contra la
                          oxidación y el deterioro, incluso en entornos
                          climáticos adversos.
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

export default Bandas;
