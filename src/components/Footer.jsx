import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { BsStackOverflow } from 'react-icons/bs';


const Footer = () => {
	return (
		<div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
			<div className='flex justify-between flex-wrap gap-4'>
				<p className='text-white text-center w-full sm:w-auto font-light'>© 2023 csgeek. All rights reserved.</p>
				<div className='text-white flex justify-around sm:w-[200px] w-full'>
					<a href="mailto:balajiyaswanth.v@gmail.com" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<FiMail className='text-xl' />
					</a>
					<a href="https://github.com/Yaswanth820" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
						<FaGithub className='text-xl' />
					</a>
					<a href="https://www.linkedin.com/in/balaji-yaswanth/" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<AiFillLinkedin className='text-xl' />
					</a>
					<a href="https://stackoverflow.com/users/12291279/csgeek" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<BsStackOverflow className='text-xl' />
					</a>
					<a href="https://medium.com/@balajiyaswanth.v" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<AiFillMediumCircle className='text-xl' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;