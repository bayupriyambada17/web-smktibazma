/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react'

interface CareerDetailProps {

}

const CareerDetail: FC<CareerDetailProps> = ({ }) => {
  return (
    <div className="flex flex-col container mx-auto max-w-7xl my-4">
      <img src="https://dummyimage.com/1200x400/000/fff&text=Banner+Career" alt="Banner" className="w-full" height={`200px`} />

      <div className='bg-white shadow rounded-md p-4 mt-4'>
        <h4 className="font-semibold text-2xl mb-3">Title</h4>
        <p className='text-lg font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eum ea optio beatae enim ipsum quo neque eveniet dolorem sunt ipsa quas, iusto dignissimos dolor maxime et pariatur officiis tempora eaque aperiam. Pariatur magnam explicabo harum voluptate recusandae fuga accusamus culpa odit iure sint mollitia est saepe, voluptas voluptatem eveniet! Debitis rem odit eligendi asperiores velit, mollitia sunt ea nobis tenetur dolor ducimus culpa dolore iusto. Odit, earum, officiis consectetur velit debitis iure omnis consequuntur ratione quod, quibusdam laudantium fugiat quidem eos architecto corporis quaerat aspernatur nostrum sapiente quis tempore maxime odio! Exercitationem consectetur voluptatem repellat nam consequuntur, fuga odit.</p>
      </div>
      <div className=''>Kunjungi Link Pendaftaran</div>
    </div>
  )
}

export default CareerDetail;