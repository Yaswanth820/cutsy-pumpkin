import React from 'react';
import { projects } from '../constants';
import Card from './Card';

const Works = () => {
  return (
    <div className="projects bg-black px-4 py-16">
      <div className='text-white w-full sm:px-16 px-2'>
        <p className='font-light'>MY WORK</p>
        <h2 className='text-5xl font-extrabold mt-4'>Projects.</h2>
        <p className='mt-3 text-[17px] max-w-3xl leading-[30px]'>I love learning by experimenting on things. I have build a couple of projects in this journey from small to very cool tech projects. I have also contributed to large-scale projects such as IBM's carbon-ui-builder. Here are a few of my personal projects. You can find the list of all projects in my Github (including this portfolio 😜). Make sure to leave a star if you like those. 🌟</p>
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