import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";

const Hero = () => {

	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < name.length) {
				ref.current++;
				setText(() => text + name[ref.current - 1]);
			}
		}, 500);
		return () => clearInterval(interval);
	}, [text]);

	return (
		<div className='realtive h-[calc(100vh-4rem)] flex justify-center items-center text-white'>
			<div className='h-36 backdrop-blur-sm rounded-3xl'>
				<h1 className='text-7xl font-bold'>Hi, I'm&nbsp;<span className='text-purple-600 font-extrabold'>{text}</span></h1>
				<p className='mt-3 text-xl'>I love to learn about building scalable and optimized backend systems.</p>
			</div>
			<div className='absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center'>
				<a href='#about'>
					<div className='w-[28px] h-[40px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
						<motion.div
							animate={{
								y: [0, 10, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className='border-2 w-2 h-2 rounded-full bg-white mb-0'
						/>
					</div>
				</a>
			</div>
		</div>
	);
}

export default Hero;
// px-8 py-16 backdrop-blur-sm bg-white/5