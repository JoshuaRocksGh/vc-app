import React from 'react';
// import { usePathname } from "next/navigation";

import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
	return (
		<nav className='border-gray-200 dark:bg-gray-900 p-1 bg-white'>
			<div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between lg:!flex lg:basis-auto'>
				{/* <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Flowbite
          </span>
        </a> */}

				<a
					class='mb-4 me-5 ms-2 mt-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0'
					href='#'
				>
					{/* <img
                // src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                src={NCALogo}
                style={{ height: "15px" }}
                alt="TE Logo"
                loading="lazy"
              /> */}
					<Image
						width={80}
						height={40}
						src={'/partyLogo.png'}
						alt='Logo'
						loading='lazy'
					/>{' '}
					<p
						className='font-serif text-xl font-medium tracking-wide text-danger'
						style={{
							fontFamily: 'Playfair Display, serif ',
							// font-optical-sizing: auto;
							// font-weight: <weight>;
							// font-style: normal;
						}}
					>
						National Democratic Congress
					</p>
				</a>
				<button
					data-collapse-toggle='navbar-default'
					type='button'
					className='text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden'
					aria-controls='navbar-default'
					aria-expanded='false'
				>
					{/* <span className="sr-only">Open main menu</span> */}
					<svg
						className='h-5 w-5'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 17 14'
					>
						<path
							stroke='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M1 1h15M1 7h15M1 13h15'
						/>
					</svg>
				</button>
				<div className='hidden w-full md:block md:w-auto' id='navbar-default'>
					<ul className='border-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mt-4 flex flex-col rounded-lg border  p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse'>
						{/* <li>
							<Link
								passHref
								href='/'
								className='text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 block rounded px-3 py-2 dark:text-white dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
							>
								
								Home
							</Link>
						</li> */}
						{/* <li>
							<Link
								passHref
								href='/approved-equipment'
								className='text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 block rounded px-3 py-2 dark:text-white dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
							>
								
								Approved Equipment
							</Link>
						</li> */}
						{/* <li>
							<Link
								href='/dealership-licence'
								className='text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 block rounded px-3 py-2 dark:text-white dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
							>
								
								Dealership Licence
							</Link>
						</li> */}
						{/* <li>
							<Link
								href='/user/register'
								className='text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 block rounded px-3 py-2 dark:text-white dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
							>
								Apply
							</Link>
						</li> */}
						<li>
							<a
								href='#'
								className='text-black hover:bg-gray-100 dark:hover:bg-gray-700 block rounded px-2 py-2 dark:text-white dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
							>
								Admin
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
