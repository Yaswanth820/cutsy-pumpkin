import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className='bg-black p-4 h-full w-full text-white sm:flex sm:justify-around about' id='about'>
      <div>
        <div className='sm:px-16 px-2'>
          <p className='font-light'>INTRODUCTION.</p>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Overview.</h2>
          <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>Hello World, This is Balaji Yaswanth Vankala. I am final year CSE student (2019-2023) 🚀. I have got an emotion for computers 💘. I am a Software Engineer with good experience in building optimized backend systems and wonderful frontend web applications. I am an open-source enthusiast and a competitive programmer. Make sure to checkout my articles on <a className=' text-blue-600' href="https://medium.com/@balajiyaswanth.v">Medium</a> and answers on <a className=' text-blue-600' href="https://stackoverflow.com/users/12291279/csgeek">StackOverflow</a> 😉 . Apart from coding my hobbies are playing sudoku and swimming 🐳. </p>

          <ButtonLink
            url='https://drive.google.com/file/d/1LwiGyOgqkn_efT16Gk8nSmMIXzKKef7u/view?usp=sharing'
            text='Know More →'
            padding={`p-3`}
          />

        </div>
        <div className='mt-20 flex justify-center flex-wrap gap-7'>
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
      <img src="me-og.jpg" alt="me" className='w-full sm:w-1/3 h-[calc(100vh-4rem)]' />
    </div>
  )
}

export default About;