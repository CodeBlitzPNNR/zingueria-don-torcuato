import React from 'react'
import MainLayout from '../layout/MainLayout'
import Galeria from '../components/Galeria'

export const Obras = () => {

  const fotos = [
    {
      img: '/img/gallery/can1.JPG',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can2.JPG',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can3.JPG',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can4.JPG',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can5.JPG',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can6.JPG',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can7.JPG',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can8.JPG',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can9.JPG',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can10.JPG',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can11.JPG',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can12.JPG',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can13.JPG',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can14.JPG',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can15.JPG',
      title: 'Canaletas',
    }
  ];

  return (
    <main className="w-screen bg-slate-200">      
    <MainLayout>
      <Galeria itemData={fotos} title={'Nuestra Galería'} />
    </MainLayout>       
    </main>
  )
}
