import React from 'react';
import ButtonLink from './ButtonLink';

const Card = ({ project }) => {
  return (
    <div className='p-[1px] green-pink-gradient rounded-2xl'>
      <div className='p-4 rounded-2xl sm:w-[360px] w-full' style={{ background: '#1d1836' }}>
        <div className='relative w-full h-[230px]'>
          <img
            src={project.image}
            alt='project_image'
            className='w-full h-full object-contain'
          />
        </div>

        <div className='text-white mt-2'>
          <h3 className='font-bold text-[24px]'>{project.name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
        </div>

        <div className='mt-4 flex justify-between'>
          <div className='flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <p
                key={`${project.name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}

          </div>
          <ButtonLink url={project.source_code_link} text='Github →' padding={`px-2`} />
        </div>
      </div>
    </div>
  );
}

export default Card;

/*

    <div className='p-4 rounded-2xl sm:w-[360px] w-full' style={{ background: '#1d1836' }}>
        <div className='relative w-full h-[230px]'>
          <img
            src={project.image}
            alt='project_image'
            className='w-full h-full object-contain rounded-2xl'
          />
        </div>

      <div className='text-white mt-2'>
        <h3 className='font-bold text-[24px]'>{project.name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
      </div>

      <div className='mt-4 flex justify-between'>
        <div className='flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <p
              key={`${project.name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}

        </div>
        <a href={project.source_code_link} target='_blank' className='transition ease-in-out duration-300 px-2 rounded-md text-white border-2 hover:bg-white hover:text-black hover:scale-110 cursor-pointer hover:-translate-y-1'>Github → </a>
      </div>
    </div>

*/