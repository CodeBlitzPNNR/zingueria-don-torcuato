import { Link } from "react-router-dom";
import Dropdown from '../components/Dropdown'
import logo from '../../public/img/logoWhite.png';

const Navbar = () => {
  return (
    <nav>
      <div className="h-[400px] p-2 bgNav ">
        <div className="container m-auto h-full flex items-center justify-center lg:justify-start">
        <Link to={'/'}>
          <img src={logo} alt="Logo" className="drop-shadow-2xl w-[320px] lg:w-[440px] p-12" />          
          </Link>
        </div>        
      </div>
      <div className=" bg-gradient-to-t from-slate-950 to-slate-800 h-[64px] flex">
        <div className="container mx-auto text-white py-2 px-2 flex justify-center lg:justify-end">
        <ul className="flex font-semibold text-white gap-3 lg:gap-6 text-sm md:text-md items-center mr-0 lg:mr-20">
        <Link to={'/'}><li className=" hover:bg-slate-700 rounded bg-slate-600 py-1 px-2 cursor-pointer shadow-md shadow-black  ">Inicio</li></Link>
        <a href="/#about"><li className="hover:bg-slate-700 rounded bg-slate-600 py-1 px-2 cursor-pointer shadow-md shadow-black">Empresa</li></a>            
            <li ><Dropdown/></li>            
            <Link to={'/contacto'}><li className="hover:bg-slate-700 rounded bg-slate-600 py-1 px-2 cursor-pointer shadow-md shadow-black">Contacto</li></Link>
          </ul>          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
