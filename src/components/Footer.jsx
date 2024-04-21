import { Link } from "react-router-dom";
import logoWhite from "/img/logoWhite.png"

const Footer = () => {
  return (
    <footer className="bg-black p-2">
      <div className="container m-auto flex gap-5 text-slate-200 justify-between lg:font-medium lg:font py-3 md:flex-row flex-col">
        <div className="flex gap-12">
          <ul className="flex flex-col gap-2 p-3">
            <li>
              <Link className="cursor-pointer hover:text-sky-300" to={'/'}>Inicio</Link>
            </li>            
            <li>
              <Link className="cursor-pointer hover:text-sky-300" to={'/contacto'}>Contacto</Link>
            </li>
            <li>
              <a className="cursor-pointer hover:text-sky-300" href="/">Acceso a sistema</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 p-3">
            <li>
              <Link className="cursor-pointer hover:text-sky-300" to={'/servicios/canaletas'}>Canaletas</Link>
            </li>
            <li>
              <Link className="cursor-pointer hover:text-sky-300" to={'/servicios/extraccion'}>Extracción</Link>
            </li>
            <li>
              <Link className="cursor-pointer hover:text-sky-300" to={'/servicios/chapas'}>Chapas Traslúcidas</Link>
            </li>
            <li>
              <Link className="cursor-pointer hover:text-sky-300" to={'/servicios/claraboyas'}>Claraboyas</Link>
            </li>
            <li>
              <Link className="cursor-pointer hover:text-sky-300" to={'/servicios/bandas'}>Bandas perimetrales</Link>
            </li>
            <li>
              <Link className="cursor-pointer hover:text-sky-300" to={'/servicios/pedido'}>Trabajos a Pedido</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center text-center font-semibold text-slate-400">
          <a href="#top">
            <img
              src={logoWhite}
              alt="Logo"
              className="drop-shadow-xl w-[200px] md:block hidden"
            />
          </a>
          <h6>
            Av. del Libertador Gral. San Martín 1695. Don Torcuato, Buenos Aires. <br />
            Horarios: Lun a Vie - 8:00hs a 13:00hs y 14:00hs a 17:00hs
          </h6>
        </div>
      </div>
      <div className="bg-black">
        <div className="container m-auto text-right font-bold p-2 h-[48px]">
          <h6 className="text-white sm:text-base text-sm">Zinguería Don Torcuato - 2024 ©</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
