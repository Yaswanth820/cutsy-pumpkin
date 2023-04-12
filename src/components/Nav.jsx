import React from 'react';

const Nav = () => {

	const listItems = [
		{ id: 1, name: 'Home', url: '/' },
		{ id: 2, name: 'About', url: '/about' },
		{ id: 3, name: 'Contact', url: '/contact' },
	]
	return (

		<nav class="bg-slate-900 p-4 text-white">
			<div class="mx-auto flex w-5/6 justify-between">
				{/*<div class="block sm:hidden">
					<button class="flex items-center rounded border border-white px-3 py-2 text-white hover:border-white hover:text-white">
						<svg class="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>*/}
				<div class="text-xl font-bold">csgeek</div>
				<div class="block text-3xl sm:hidden"></div>
				<ul class="hidden font-medium sm:flex space-x-4 sm:items-center sm:text-lg">
					<li class="mr-4">Home</li>
					<li class="mr-4">About</li>
					<li class="">Contact</li>
				</ul>
			</div>
		</nav>

	);
}

export default Nav;