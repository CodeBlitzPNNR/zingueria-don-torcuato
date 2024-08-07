import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MainLayout from "../../layout/MainLayout";
import Carousel from "../../components/Carousel";
import { ArrowPathRoundedSquareIcon, CloudIcon, SunIcon, WalletIcon } from "@heroicons/react/20/solid";

const Extraccion = () => {

  const fotos = [
    {
      img: "/img/servicios/extraccion/ext1.jpg",
      alt: "extraccion 1",
    },
    {
      img: "/img/servicios/extraccion/ext2.jpg",
      alt: "extraccion 2",
    },
    {
      img: "/img/servicios/extraccion/ext3.jpeg",
      alt: "extraccion 3",
    },
    {
      img: "/img/servicios/extraccion/ext4.jpeg",
      alt: "extraccion 4",
    },
    {
      img: "/img/servicios/extraccion/ext5.jpg",
      alt: "extraccion 5",
    },
    {
      img: "/img/servicios/extraccion/ext6.jpg",
      alt: "extraccion 6",
    },
    {
      img: "/img/servicios/extraccion/ext7.jpg",
      alt: "extraccion 7",
    },
    {
      img: "/img/servicios/extraccion/ext8.jpg",
      alt: "extraccion 8",
    },
    {
      img: "/img/servicios/extraccion/ext9.jpg",
      alt: "extraccion 9",
    },
    {
      img: "/img/servicios/extraccion/ext10.jpg",
      alt: "extraccion 10",
    },
    {
      img: "/img/servicios/extraccion/ext11.jpg",
      alt: "extraccion 11",
    } 
  ];

  return (
    <main className="w-screen">
      <Helmet>
        <title>Extracción de aire para techos | Zinguería Don Torcuato</title>
        <meta name="description" content="Mejorá la calidad del aire de tus espacios con la extracción para techos de Zinguería Don Torcuato. Extrae humos, olores desagradables y limpia el aire." />
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
                      Extracción
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                      Su función principal es mejorar la circulación del aire,
                      eliminar olores no deseados, reducir la humedad y prevenir
                      la acumulación de contaminantes que pueden afectar la
                      salud y el confort de los ocupantes.
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
                  src="/img/sections/extraccion.jpg"
                  alt=""
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                    <p>
                      Eólicas y Mecánicas. <br />
                      Las extracciones eólicas se realizan para ventilar y
                      renovar el aire de determinados ambientes, este tipo de
                      trabajo se realiza sobre el techado mediante la
                      instalación de extractores eólicos, o sea que el
                      funcionamiento o requiere instalación eléctrica. Funciona
                      por diferencia de temperatura interna / externa y viento
                      de superficie. <br />
                      <br />
                      Las extracciones mecánicas en cambio requieren de un
                      extractor eléctrico y en general tubería de conducción
                      dependiendo del tipo de extracción necesaria. Ej.
                      Gastronómicas, textiles, madereras.
                    </p>
                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                        <ArrowPathRoundedSquareIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-900">
                            Mejora de la calidad del aire.
                          </strong>{" "}
                          Los extractores de aire eliminan el aire viciado y
                          contaminado del interior de los espacios, promoviendo
                          una mejor calidad del aire y creando ambientes más
                          saludables para los ocupantes..
                        </span>
                      </li>

                      <li className="flex gap-x-3">
                        <CloudIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-900">
                            Prevención de condensación.
                          </strong>{" "}
                          Al eliminar el exceso de humedad, los extractores
                          ayudan a prevenir la condensación en las superficies
                          interiores, lo que a su vez protege contra la
                          formación de moho, daños en la pintura y deterioro de
                          materiales.
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

export default Extraccion;
