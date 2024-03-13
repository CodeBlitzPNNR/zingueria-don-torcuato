import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-slate-800">
      <div className="container m-auto flex gap-5 text-slate-300 justify-between font-medium py-4">
        <div className="flex gap-12">
          <ul className="flex flex-col gap-2 p-3">
            <li className="cursor-pointer hover:text-sky-300">
              <Link>Inicio</Link>
            </li>
            <li className="cursor-pointer hover:text-sky-300">
              <Link>Empresa</Link>
            </li>
            <li className="cursor-pointer hover:text-sky-300">
              <Link>Contacto</Link>
            </li>
            <li className="cursor-pointer hover:text-sky-300">
              <a>Acceso a sistema</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 p-3">
            <li className="cursor-pointer hover:text-sky-300">
              <Link>Canaletas</Link>
            </li>
            <li className="cursor-pointer hover:text-sky-300">
              <Link>Eólicos</Link>
            </li>
            <li className="cursor-pointer hover:text-sky-300">
              <Link>Chapas Traslúcidas</Link>
            </li>
            <li className="cursor-pointer hover:text-sky-300">
              <Link>Claraboyas</Link>
            </li>
            <li className="cursor-pointer hover:text-sky-300">
              <Link>Techos</Link>
            </li>
            <li className="cursor-pointer hover:text-sky-300">
              <Link>Trabajos a Pedido</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center text-center font-semibold text-slate-400">
          <a href="#top">
            <img
              src="./img/logoWhite.png"
              alt="Logo"
              className="drop-shadow-xl w-[200px]"
            />
          </a>
          <h6>
            Av. del Libertador Gral. San Martín 1695. Don Torcuato, Buenos Aires. <br />
            Horarios: Lun a Vie - 8:00hs a 13:00hs y 14:00hs a 17:00hs
          </h6>
        </div>
      </div>
      <div className="bg-black">
        <div className="container m-auto text-right font-bold p-2">
          <h6 className="text-white">Zinguería Don Torcuato - 2024 ©</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
