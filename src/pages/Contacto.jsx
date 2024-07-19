import React from 'react'
import { Helmet } from "react-helmet";
import MinLayout from '../layout/MinLayout'
import Form from '../components/Form'
import './contacto.css'


export const Contacto = () => {
  return (
    <main className="w-screen min-h-screen bg-slate-300 bg-img">
       <Helmet>
        <title>Contacto y consultas | Zinguería Don Torcuato</title>
        <meta name="description" content="Contacta a Zinguería Don Torcuato para consultas y asesoramiento personalizado. Estamos listos para ayudarte con tus proyectos de zinguería y pedidos." />
      </Helmet>
    <MinLayout>
        <section className='py-5 flex'>
            <Form />          
        </section>
    </MinLayout>
    </main>   
  )
}
