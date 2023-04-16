import React from 'react';

const Nav = () => {

	return (
		<nav class="bg-slate-900 p-4 text-white fixed w-full z-10 top-0" style={{ cursor: 'default' }}>
			<div class="mx-auto text-center sm:flex w-5/6 sm:justify-between">
				<div class="text-3xl font-extrabold sm:text-2xl">
					<a href="#hero">csgeek</a>
				</div>
				<div class="block text-3xl sm:hidden"></div>
				<ul class="hidden font-medium sm:flex space-x-4 sm:items-center sm:text-lg">
					<li><a href="#hero">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;