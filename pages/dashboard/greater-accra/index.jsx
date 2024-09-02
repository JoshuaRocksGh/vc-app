import React from 'react';
import Navbar from '../../../components/snippets/NavBar';
import LinksTab from '../../../components/snippets/LinksTab';
import Link from 'next/link';
import Image from 'next/image';
import { RingProgress } from '@mantine/core';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function GreaterAccra() {
	return (
		<>
			{/* <div> */}
			<Navbar />
			<LinksTab />
			<div className=' flex flex-row p-2 m-1'>
				<div className='basis-4/12 p-0.5'>
					<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Presidential
						</legend>
						<div className='flex flex-row p-2 mt-2'>
							<div className='basis-1/3'>
								<div className='p-0.5 m-0.5 bg-primary border border-white shadow-xl rounded-lg'>
									<div className='flex justify-center'>
										<Image
											width={80}
											height={60}
											src={'/partyLogo.png'}
											alt='Logo'
											loading='lazy'
											className='-mt-8'
										/>
									</div>
									<div className=''>
										<p
											className='font-serif -mt-2 text-5xl font-semibold tracking-wide text-white flex justify-center'
											style={{
												fontFamily: 'Playfair Display, serif ',
												// font-optical-sizing: auto;
												// font-weight: <weight>;
												// font-style: normal;
											}}
										>
											3,150,410
										</p>
										<br />
										<p
											className='font-serif -mt-2 text-md font-semibold tracking-wide text-white flex justify-center -mt-4'
											style={{
												fontFamily: 'Playfair Display, serif ',
												// font-optical-sizing: auto;
												// font-weight: <weight>;
												// font-style: normal;
											}}
										>
											45.58%
										</p>
									</div>
								</div>
							</div>
							<div className='basis-1/3'>
								<div className='p-0.5 m-0.5 bg-[#04036e] border border-white shadow-xl rounded-lg'>
									<div className='flex justify-center mb-4'>
										<Image
											width={80}
											height={60}
											src={'/nppLogo1.png'}
											alt='Logo'
											loading='lazy'
											className='-mt-8 '
										/>
									</div>
									<div>
										<p
											className='font-serif -mt-2 text-5xl font-semibold tracking-wide text-white flex justify-center'
											style={{
												fontFamily: 'Playfair Display, serif ',
												// font-optical-sizing: auto;
												// font-weight: <weight>;
												// font-style: normal;
											}}
										>
											2,150,410
										</p>
										<br />
										<p
											className='font-serif -mt-2 text-md font-semibold tracking-wide text-white flex justify-center -mt-4'
											style={{
												fontFamily: 'Playfair Display, serif ',
												// font-optical-sizing: auto;
												// font-weight: <weight>;
												// font-style: normal;
											}}
										>
											44.20%
										</p>
									</div>
								</div>
							</div>
							<div className='basis-1/3'>
								<div className='p-0.5 m-0.5 bg-[#ced4da] border border-white shadow-xl rounded-lg'>
									{/* <br /> */}
									<div>
										<p
											className='font-serif -mt-1 text-5xl font-semibold tracking-wide text-black flex justify-center'
											style={{
												fontFamily: 'Playfair Display, serif ',
												// font-optical-sizing: auto;
												// font-weight: <weight>;
												// font-style: normal;
											}}
										>
											210,452
										</p>
										<br />
										<p
											className='font-serif -mt-2 text-md font-semibold tracking-wide text-black flex justify-center -mt-4'
											style={{
												fontFamily: 'Playfair Display, serif ',
												// font-optical-sizing: auto;
												// font-weight: <weight>;
												// font-style: normal;
											}}
										>
											1.52%
										</p>
									</div>
								</div>
							</div>
						</div>
						<br />
						<Bar
							data={{
								labels: ['NDC', 'NPP', 'OTHERS'],
								datasets: [
									{
										label: 'VOTES',
										data: [555123, 452202, 23000],
										backgroundColor: [
											'rgba(1, 100, 56, 1)',
											'rgba(4, 3, 110, 1)',
											'rgba(206, 212, 218, 1)',
										],
										borderRadius: 5,
									},
								],
							}}
						/>
					</fieldset>
				</div>
				<div className='basis-8/12 grid grid-rows-6 grid-flow-col gap-1'>
					<Link
						passHref
						href='/dashboard/greater-accra/ablekuma-central'
						className='hover:-translate-y-1'
					>
						<fieldset className='p-1 m-1   dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white shadow-xl'>
							<legend
								className='font-serif text-sm font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Ablekuma Central
							</legend>
							<div className=' flex flex-row justify-items-center '>
								<div className='basis-1/2 flex flex-col justify-items-center'>
									<p
										className='font-serif text-base font-semibold tracking-wide text-primary p-0 m-0 '
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										NDC 1,000,452
									</p>
									{/* <p
									className='font-serif text-base font-semibold -mt-2 text-primary'
									style={{
										fontFamily: 'Playfair Display, serif ',
										
									}}
								>
									1,000,452
								</p> */}
								</div>
								{/* <div className='basis-1/3 grid justify-items-center'>
								<RingProgress
									size={50}
									thickness={10}
									roundCaps
									rootColor='white'
									sections={[
										{ value: 40, color: '#016438' },
										{ value: 15, color: '#04036e' },
										{ value: 5, color: '#ced4da' },
									]}
								/>
							</div> */}
								<div className='basis-1/2 flex flex-col'>
									<p
										className='font-serif text-base font-semibold tracking-wide text-npp'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										NPP 1,400,452
									</p>
									{/* <p
									className='font-serif text-xl font-semibold -mt-2 text-npp'
									style={{
										fontFamily: 'Playfair Display, serif ',
									}}
								>
									1,400,452
								</p> */}
								</div>
							</div>
						</fieldset>
					</Link>
					<fieldset className='p-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ablekuma West
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ada East
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Adenta
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ayawaso Central
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ayawaso North
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ga Central
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ga North
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>

					{/* <div className='basis-2/12'> */}
					{/* <div className='flex flex-col p-0 m-0'> */}
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ablekuma North
						</legend>
						<div className=' flex flex-row -mt-2'>
							<div className='basis-1/3 flex flex-col'>
								<p
									className='font-serif text-base font-semibold tracking-wide text-primary'
									style={{
										fontFamily: 'Playfair Display, serif ',
										// font-optical-sizing: auto;
										// font-weight: <weight>;
										// font-style: normal;
									}}
								>
									NDC
								</p>
								<p
									className='font-serif text-xl font-semibold -mt-2 text-primary'
									style={{
										fontFamily: 'Playfair Display, serif ',
										// font-optical-sizing: auto;
										// font-weight: <weight>;
										// font-style: normal;
									}}
								>
									1,000,452
								</p>
							</div>
							<div className='basis-1/3'>
								<RingProgress
									size={60}
									thickness={10}
									roundCaps
									rootColor='white'
									sections={[
										{ value: 50.9, color: '#016438' },
										{ value: 40, color: '#04036e' },
										{ value: 3, color: '#ced4da' },
									]}
								/>
							</div>
							<div className='basis-1/3 flex flex-col'>
								<p
									className='font-serif text-base font-semibold tracking-wide text-npp'
									style={{
										fontFamily: 'Playfair Display, serif ',
										// font-optical-sizing: auto;
										// font-weight: <weight>;
										// font-style: normal;
									}}
								>
									NPP
								</p>
								<p
									className='font-serif text-xl font-semibold -mt-2 text-npp'
									style={{
										fontFamily: 'Playfair Display, serif ',
										// font-optical-sizing: auto;
										// font-weight: <weight>;
										// font-style: normal;
									}}
								>
									1,400,452
								</p>
							</div>
						</div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Accra
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ada West
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ashaiman
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ayawaso East
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ayawaso West
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ga East
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ga South
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ga West
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Korle-Klottey
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Kpone-Katamanso
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Krowor
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							La-Dade-Kotopon
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							La-Nkwantanang-Madina
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ledzokuku
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ningo-Prampram
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Shai-Osudoku
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Tema Metropolitan
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Tema West
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-xl font-semibold tracking-wide text-danger'
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Weija Gbawe
						</legend>
						<div className=' flex flex-row -mt-2'></div>
					</fieldset>
					{/* </div> */}
					{/* </div> */}
				</div>
			</div>
		</>
	);
}
