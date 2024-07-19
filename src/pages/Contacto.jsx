import React from 'react'
import MinLayout from '../layout/MinLayout'
import Form from '../components/Form'
import './contacto.css'


export const Contacto = () => {
  return (
    <main className="w-screen min-h-screen bg-slate-300 bg-img">
    <MinLayout>
        <section className='py-5 flex'>
            <Form />          
        </section>
    </MinLayout>
    </main>   
  )
}
