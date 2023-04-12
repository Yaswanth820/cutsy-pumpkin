import React from 'react';

const Card = ({ project }) => {
  return (
    <div className='p-5 rounded-2xl sm:w-[300px] w-full' style={{ background: '#1d1836' }}>
      <div className='relative w-full h-[150px]'>
        <img
          src={project.image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-3'>
          <div
            onClick={() => window.open(project.source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={project.github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='text-white mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {project.tags.map((tag) => (
          <p
            key={`${project.name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Card;