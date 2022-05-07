import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';
import NavDesktop from './NavDesktop';
import MobileHamburger from './MobileHamburger';
import { isMobile } from 'react-device-detect';
import Logo from './Logo';
import SearchBox from './SearchBox';

const Nav = () => {

	const [ isMenuVisible, setMenuVisibility ] = useState(false);

	return (
		<>
			<nav className="max-w-screen-xxl mx-auto">
				<div className="grid grid-flow-col grid-cols-3 items-center">
					
					{isMobile && <MobileHamburger />}

					<div className="col-span-1">
						<SearchBox />
					</div>
					<div className="col-span-1 text-center">
						<Logo src="/images/sgb-logo.png" width={80} height={80}></Logo>
					</div>

					<div className="flex justify-end text-xs col-span-1">
						<div className="flex justify-around w-[100px]">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						</div>
					</div>
				</div>
			</nav>

		<NavDesktop /> 
		</>
	)
};

export default Nav;
