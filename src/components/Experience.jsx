import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';


const Experience = () => {
  return (
    <div className='bg-black p-12 w-screen text-white'>
      <p className='text-center font-light'>MY JOURNEY SO FAR.</p>
      <h2 className='text-center text-5xl font-extrabold mt-2'>Work Experience.</h2>
      <VerticalTimeline className='mt-16'>
        {experiences.map((experience) => (
          <VerticalTimelineElement
            className="relative vertical-timeline-element--work"
            contentStyle={{ background: "#1d1836", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.duration}
            iconStyle={{ background: '#383E56' }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img
                  src={experience.icon}
                  alt={experience.company}
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>
            }
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>{experience.role}</h3>
              <p
                className='text-secondary text-[16px] font-semibold'
                style={{ margin: 0 }}
              >
                {experience.company}
              </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {experience.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default Experience;