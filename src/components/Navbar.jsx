import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="h-[200px] p-2 bgNav">
        <div className="container m-auto h-full flex items-center">
          <img src="./img/logoWhite.png" alt="Logo" className="drop-shadow-2xl w-[400px]" />          
        </div>        
      </nav>
      <div className=" bg-gradient-to-t from-slate-950 to-slate-700 h-[64px] flex">
        <div className="container mx-auto text-white py-2 flex justify-end">
        <ul className="flex font-semibold text-white gap-6 text-md items-center mr-20">
            <li className=" hover:bg-slate-600 rounded bg-slate-700 py-1 px-2 cursor-pointer shadow-md shadow-black  "><Link to={'/'}>Inicio</Link></li>
            <li className="hover:bg-slate-600 rounded bg-slate-700 py-1 px-2 cursor-pointer shadow-md shadow-black"><a href="#about">Empresa</a></li>
            <li className="hover:bg-slate-600 rounded bg-slate-700 py-1 px-2 cursor-pointer shadow-md shadow-black">Servicios</li>
            <li className="hover:bg-slate-600 rounded bg-slate-700 py-1 px-2 cursor-pointer shadow-md shadow-black"><Link to={'/obras-realizadas'}>Obras realizadas</Link></li>
            <li className="hover:bg-slate-600 rounded bg-slate-700 py-1 px-2 cursor-pointer shadow-md shadow-black"><Link to={'/contacto'}>Contacto</Link></li>
          </ul>          
        </div>
      </div>
    </>
  );
};

export default Navbar;
