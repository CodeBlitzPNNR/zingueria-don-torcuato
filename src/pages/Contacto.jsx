import React from 'react'
import MainLayout from '../layout/MainLayout'
import Form from '../components/Form'


export const Contacto = () => {
  return (
    <main className="w-screen min-h-screen bg-slate-200 ">
    <MainLayout>
        <section className='py-5 flex'>
            <Form />          
        </section>
    </MainLayout>
    </main>   
  )
}
