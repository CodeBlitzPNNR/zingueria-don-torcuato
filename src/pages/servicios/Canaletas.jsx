import React from "react";
import { Helmet } from "react-helmet";
import MainLayout from "../../layout/MainLayout";
import Galeria from '../../components/Galeria'
import Carousel from "../../components/Carousel";
import { ClockIcon, CloudIcon, HomeModernIcon } from "@heroicons/react/20/solid";

const Canaletas = () => {

  const fotos = [
    {
      img: "/img/servicios/canaletas/can1.JPG",
      alt: "Canaletas 1",
    },
    {
      img: "/img/servicios/canaletas/can2.JPG",
      alt: "Canaletas 2",
    },
    {
      img: "/img/servicios/canaletas/can3.JPG",
      alt: "Canaletas 3",
    },
    {
      img: "/img/servicios/canaletas/can4.JPG",
      alt: "Canaletas 4",
    },
    {
      img: "/img/servicios/canaletas/can5.JPG",
      alt: "Canaletas 5",
    },
    {
      img: "/img/servicios/canaletas/can6.JPG",
      alt: "Canaletas 6",
    },
    {
      img: "/img/servicios/canaletas/can7.JPG",
      alt: "Canaletas 7",
    },
    {
      img: "/img/servicios/canaletas/can8.JPG",
      alt: "Canaletas 8",
    },
    {
      img: "/img/servicios/canaletas/can9.JPG",
      alt: "Canaletas 9",
    },
    {
      img: "/img/servicios/canaletas/can10.JPG",
      alt: "Canaletas 10",
    },
    {
      img: "/img/servicios/canaletas/can11.jpg",
      alt: "Canaletas 11",
    },
    {
      img: "/img/servicios/canaletas/can12.jpg",
      alt: "Canaletas 12",
    },
    {
      img: "/img/servicios/canaletas/can13.jpg",
      alt: "Canaletas 13",
    },
    {
      img: "/img/servicios/canaletas/can14.jpg",
      alt: "Canaletas 14",
    },
    {
      img: "/img/servicios/canaletas/can15.JPEG",
      alt: "Canaletas 15",
    },
    {
      img: "/img/servicios/canaletas/can16.jpg",
      alt: "Canaletas 16",
    },
    {
      img: "/img/servicios/canaletas/can17.jpg",
      alt: "Canaletas 17",
    }  
  ];

  return (
    <main className="w-screen">
      <Helmet>
        <title>Canaletas para techos | Zinguería Don Torcuato</title>
        <meta name="description" content="En Zinguería Don Torcuato, ofrecemos canaletas de alta calidad para todo tipo de proyectos, asegurando eficiencia y durabilidad en la evacuación de agua." />
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
                      Canaletas
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                      Fabricadas típicamente en metal, PVC o aluminio, estas
                      estructuras se instalan a lo largo del borde del techo
                      para recolectar el agua de lluvia y dirigirla de manera
                      segura y controlada hacia los desagües pluviales o
                      sistemas de recolección de agua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img
                  className="w-[48rem] max-w-[100%] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem]"
                  src="/img/sections/canaletas.jpg"
                  alt=""
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                    <p>
                      Las exteriores quedan a la vista y se instalan mediante
                      soportes que se fijan a la estructura, sea madera
                      tirantería o cenefa, hierro o mampostería. <br /> Las
                      canaletas internas suelen ser las uniones de dos techos o
                      la terminación de un techo contra un muro.
                    </p>
                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                      <li className="flex gap-x-3">
                        <HomeModernIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-900">
                            Protección estructural.
                          </strong>{" "}
                          Al mantener el agua de lluvia alejada del techo y las
                          paredes, las canaletas contribuyen a preservar la
                          integridad de la estructura, evitando la corrosión, la
                          formación de moho y la degradación de materiales como
                          la madera o el metal..
                        </span>
                      </li>

                      <li className="flex gap-x-3">
                        <CloudIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-900">
                            Prevención de inundaciones.
                          </strong>{" "}
                          Las canaletas evitan la acumulación de agua en el
                          techo, lo que podría resultar en inundaciones internas
                          y daños en el interior del edificio, protegiendo así
                          el interior de filtraciones y deterioros.
                        </span>
                      </li>

                      <li className="flex gap-x-3">
                        <ClockIcon
                          className="mt-1 h-5 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="font-semibold text-gray-900">
                            Prolongación de la vida útil.
                          </strong>{" "}
                          Al prevenir la acumulación de agua estancada y la
                          consiguiente corrosión, las canaletas contribuyen a
                          prolongar la vida útil del techo, las paredes y otros
                          elementos estructurales del edificio, lo que ahorra
                          costos de mantenimiento a largo plazo.
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

export default Canaletas;
