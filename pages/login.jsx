import React from 'react';
import Image from 'next/image';
import { Input, Button } from '@mantine/core';

export default function Login() {
	return (
		<div>
			<div className=''>
				<div className=' flex flex-row'>
					<div className='basis-2/5'>
						<div className=' dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg h-dvh p-6   bg-white p-6 '>
							<br />
							<br />
							<br />
							<div className='p-16 '>
								<div className='flex flex-row'>
									{/* <Image
										width={80}
										height={40}
										src={'/partyLogo.png'}
										alt='Logo'
										loading='lazy'
									/> */}
									<p
										className='font-serif text-4xl font-medium tracking-wide text-danger'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										Welcome!
									</p>
								</div>

								<p
									className='text-slate-400'
									style={{
										fontFamily: 'Playfair Display, serif ',
										// font-optical-sizing: auto;
										// font-weight: <weight>;
										// font-style: normal;
									}}
								>
									Welcome Back. Please enter your details{' '}
								</p>
								<br />
								<div>
									<label className='mb-1 block text-sm font-medium text-black dark:text-white'>
										User Id
										{/* <span className=' font-semibold text-danger '>
											{symbol}
										</span> */}
									</label>
									<Input radius='md' placeholder='Enter User Id' />
								</div>
								<br />
								<div>
									<label className='mb-1 block text-sm font-medium text-black dark:text-white'>
										Password
										{/* <span className=' font-semibold text-danger '>
											{symbol}
										</span> */}
									</label>
									<Input radius='md' placeholder='Enter Password' />
								</div>
								<br />
								<br />
								<Button
									className='bg-primary'
									fullWidth
									variant='filled'
									size='md'
									radius='md'
									// color='#016438'
								>
									Button
								</Button>
							</div>
						</div>
					</div>
					<div
						className='basis-3/5'
						style={{
							backgroundImage: `url("../bg5.png")`,
							backgroundSize: 'cover',
							opacity: '0.7',
							backgroundRepeat: 'no-repeat',
							// height: '680px',
							// width: '100%',
						}}
					></div>
					{/* <div className='basis-1/5'></div> */}
				</div>
			</div>
		</div>
	);
}
