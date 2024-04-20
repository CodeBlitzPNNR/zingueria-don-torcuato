import MainLayout from '../layout/MainLayout'
import { Link } from "react-router-dom";

const Error = (err, errMsg) => {
  return (    
      <main className="w-screen min-h-screen bg-slate-300 bg-img">
    <MainLayout>
        <section className='container m-auto'>
            <div className='w-[300px] flex flex-col gap-4 items-center m-auto bg-slate-700 rounded-lg p-4'>
              <h4 className=' text-sm text-center text-white'>Hubo un error encontrando esta dirección.</h4>
                <Link className='bg-red- px-6 py-2 font-bold text-white rounded-md bg-slate-900' to={'/'}>Volver al Inicio</Link>
            </div>
        </section>
    </MainLayout>
    </main>       
  )
}

export default Error