import React from 'react'
import MainLayout from '../layout/MainLayout'
import Galeria from '../components/Galeria'

export const Obras = () => {

  const fotos = [
    {
      img: '/img/gallery/can1.webp',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can2.webp',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can3.webp',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can4.webp',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can5.webp',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can6.webp',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can7.webp',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can8.webp',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can9.webp',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can10.webp',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can11.webp',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can12.webp',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can13.webp',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can14.webp',
      title: 'Canaletas',
    },
    {
      img: '/img/gallery/can15.webp',
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
