import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';
import Logo from './Logo';


const Nav = () => {

	const [ isMenuVisible, setMenuVisibility ] = useState(false);
	// const [logoUrl, setLogoUrl] = useState('/images/sgb-logo.png');

	// useLayoutEffect(() => {

	// 	window.addEventListener('resize', () => {
	// 		if(window.innerWidth > 992) {
	// 			setLogoUrl('/images/sgb-logo.png');
	// 		} else {
	// 			setLogoUrl('/images/SGB-Logo-Mobile.jpeg');
	// 		}
	// 	})
	// }, [logoUrl]);
	
	return (
		<nav className="bg-white px-4 py-2">
			<div className="container grid grid-flow-col grid-cols-3 items-center">
				{/*Menu button*/}
				<div className="flex col-span-2 items-center">
					<a className='w-6'>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
						</svg>
					</a>

					<div class="ml-2 h-[30px]">
						<Link href="/">
							<a className="inline-block  overflow-hidden">
								<Logo src='/images/SGB-Logo-Mobile.jpeg' width={150} height={30}/>
							</a>
						</Link>
					</div>
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

			

				{/* MMenu in mobile
				<div className={`${ isMenuVisible ? 'max-h-full h-full' : 'h-0' } w-full overflow-hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`}>
					<div className="text-sm font-medium uppercase lg:flex-grow">
					<Link href="/categories">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
							Categories
						</a>
					</Link>
					<Link href="/">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
							Women
						</a>
					</Link>
					<Link href="/">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
							Kids
						</a>
					</Link>
					<Link href="/">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
							Home & Living
						</a>
					</Link>
					<Link href="/">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
							Offers
						</a>
					</Link>
					</div>

					<div className="text-sm font-medium">
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
							Profile
						</a>
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
							Wishlist
						</a>
						<CartIcon/>
					</div>
				</div> */}

			</div>
		</nav>
	)
};

export default Nav;
