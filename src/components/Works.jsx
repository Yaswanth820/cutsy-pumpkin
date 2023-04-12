import React from 'react';
import { projects } from '../constants';
import Card from './Card';

const Works = () => {
  return (
    <div className="bg-black p-24">
      <div className='text-white w-[700px]'>
        <p>MY WORK</p>
        <h2 className='text-5xl font-extrabold mt-4'>Projects.</h2>
        <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem nam quisquam quasi! Quo alias voluptates iusto non corrupti! Laborum odio tempora sit, mollitia architecto itaque, nobis earum quaerat reprehenderit ratione consectetur nesciunt quos qui?</p>
      </div>

      <div className='mt-20 flex justify-center flex-wrap gap-7'>
        {projects.map((project) => (
          <Card project={project} />
        ))}
      </div>

      <div className='text-white w-[700px]'>
        <h2 className='text-5xl font-extrabold mt-4'>Blogs.</h2>
        <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem nam quisquam quasi! Quo alias voluptates iusto non corrupti! Laborum odio tempora sit, mollitia architecto itaque, nobis earum quaerat reprehenderit ratione consectetur nesciunt quos qui?</p>
      </div>
      <div className='mt-20 flex justify-center flex-wrap gap-7'>
        {projects.map((project) => (
          <Card project={project} />
        ))}
      </div>
    </div>
  );
};

export default Works;