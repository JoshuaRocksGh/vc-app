import React, { useEffect } from 'react';
import Navbar from '../../components/snippets/NavBar';
import LinksTab from '../../components/snippets/LinksTab';
import { createOptionalContext, RingProgress } from '@mantine/core';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import sourceData from '../../src/data/sourceData.json';
import Image from 'next/image';
import Link from 'next/link';
// import * as PusherPushNotifications from '@pusher/push-notifications-web';
import Pusher from 'pusher-js';
import revenueData from '../../src/data/revenueData.json';
// import { checkDomainOfScale } from 'recharts/types/util/ChartUtils';

// defaults.maintainAspectRatio = false;
// defaults.responsive = true;
export default function Dashboard() {
	const [nationalResult, setNationalResult] = React.useState(null);
	const [regionalResult, setRegionalResult] = React.useState(null);
	const [allNationalData, setAllNationalData] = React.useState(null);
	const [allRegionsdata, setAllRegionsdata] = React.useState(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const cachedNationalData = localStorage.getItem('national-results');
			const cachedRegionalData = localStorage.getItem('regional-results');
			if (cachedNationalData) {
				// console.log('cachedNationalData==>', cachedNationalData);
				setAllNationalData(JSON.parse(cachedNationalData));
				setNationalResult(JSON.parse(cachedNationalData));
				// return;
			}
			if (cachedRegionalData) {
				// console.log('cachedRegionalData==>', cachedRegionalData);
				setAllRegionsdata(JSON.parse(cachedRegionalData));
				setRegionalResult(JSON.parse(cachedRegionalData));
				// return;
			}
			return;
		}

		const pusher = new Pusher('566a742e0e344fa68a5a', {
			cluster: 'mt1',
		});
		// const intervalId = setInterval(() => {
		// setCount((prevCount) => prevCount + 1);
		// console.log('called');

		const channel = pusher.subscribe('national-results');
		channel.bind('update', function (data) {
			console.log('national-results=>', data?.data);
			// setNationalResult([]);

			setAllNationalData(data?.data);
			setNationalResult(data?.data);
			localStorage.setItem('national-results', JSON.stringify(data?.data)); // Cache data
			// console.log('nationalResult=>', nationalResult);
		});

		const channel2 = pusher.subscribe('regional-results');
		channel2.bind('update', function (data) {
			console.log('regional-results=>', data);
			setAllRegionsdata(data?.data);
			setRegionalResult(data?.data);
			localStorage.setItem('regional-results', JSON.stringify(data?.data)); // Cache data
		});
		// }, 3000);

		// Clean up the subscription on component unmount
		// return () => {
		// 	channel.unbind_all();
		// 	channel.unsubscribe();
		// };
	}, []);

	// const channel = pusher.subscribe('my-channel');
	// channel.bind('my-event', function (data) {
	// 	// app.messages.push(JSON.stringify(data));
	// 	console.log('==>', JSON.stringify(data));
	// });

	// const channel = pusher.subscribe('my-channel');
	// channel.bind('my-event', function (data) {
	// 	return data;
	// const allNationalData = [
	// 	{
	// 		total_npp_presidential: 89,
	// 		total_ndc_presidential: 259,
	// 		total_invalid_presidential: 12,
	// 		total_other_presidential: 67,
	// 		total_ndc_parliamentary: 250,
	// 		total_npp_parliamentary: 78,
	// 		total_other_parliamentary: 67,
	// 		total_invalid_parliamentary: 10,
	// 	},
	// ];

	// const allRegionsdata = [
	// 	{
	// 		region: 'WESTERN',
	// 		total_npp_presidential: 89,
	// 		total_ndc_presidential: 259,
	// 		total_invalid_presidential: 12,
	// 		total_other_presidential: 67,
	// 		total_ndc_parliamentary: 250,
	// 		total_npp_parliamentary: 78,
	// 		total_other_parliamentary: 67,
	// 		total_invalid_parliamentary: 10,
	// 	},
	// 	{
	// 		region: 'GREATER_ACCRA',
	// 		total_npp_presidential: 89000,
	// 		total_ndc_presidential: 25900,
	// 		total_invalid_presidential: 120,
	// 		total_other_presidential: 10000,
	// 		total_ndc_parliamentary: 2500,
	// 		total_npp_parliamentary: 780,
	// 		total_other_parliamentary: 10000,
	// 		total_invalid_parliamentary: 100,
	// 	},
	// 	{
	// 		region: 'ASHANTI',
	// 		total_npp_presidential: 89,
	// 		total_ndc_presidential: 259,
	// 		total_invalid_presidential: 12,
	// 		total_other_presidential: 67,
	// 		total_ndc_parliamentary: 250,
	// 		total_npp_parliamentary: 78,
	// 		total_other_parliamentary: 67,
	// 		total_invalid_parliamentary: 10,
	// 	},
	// 	{
	// 		region: 'AHAFO',
	// 		total_npp_presidential: 89,
	// 		total_ndc_presidential: 259,
	// 		total_invalid_presidential: 12,
	// 		total_other_presidential: 67,
	// 		total_ndc_parliamentary: 250,
	// 		total_npp_parliamentary: 78,
	// 		total_other_parliamentary: 67,
	// 		total_invalid_parliamentary: 10,
	// 	},
	// 	{
	// 		region: 'UPPER_EAST',
	// 		total_npp_presidential: 89,
	// 		total_ndc_presidential: 259,
	// 		total_invalid_presidential: 12,
	// 		total_other_presidential: 67,
	// 		total_ndc_parliamentary: 250,
	// 		total_npp_parliamentary: 78,
	// 		total_other_parliamentary: 67,
	// 		total_invalid_parliamentary: 10,
	// 	},
	// ];
	// });
	// allRegionsdata?.map((e) =>
	// 	e.region === 'GREATER_ACCRA'
	// 		? setGreaterAccra([
	// 				e.total_ndc_presidential,
	// 				e.total_npp_presidential,
	// 				e.total_other_presidential,
	// 		  ])
	// 		: setGreaterAccra([])
	// );

	// all regions pie data
	const [greaterAccra, setGreaterAccra] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'GREATER_ACCRA'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);
	const [brongAhafo, setBrongAhafo] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'BRONG_AHAFO'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);

	const [central, setCentral] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'CENTRAL'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);

	const [eastern, setEastern] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'EASTERN'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);

	const [norther, setNorthern] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'NORTHERN'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);

	const [upperEast, setUpperEast] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'UPPER_EAST'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);
	const [upperWest, setUpperWest] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'UPPER_WEST'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);

	const [volta, setVolta] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'VOLTA'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);

	const [ashanti, setAshanti] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'ASHANTI'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);

	allRegionsdata?.find((e) =>
		e.region === 'WESTERN'
			? [
					e.total_ndc_presidential,
					e.total_npp_presidential,
					e.total_other_presidential,
			  ]
			: null
	);

	const [western, setWestern] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'WESTERN'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);

	const [savannah, setSavannah] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'SAVANNAH'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);

	const [bonoEast, setBonoEast] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'BONO_EAST'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);

	const [oti, setOti] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'OTI'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);

	const [ahafo, setAhafo] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'AHAFO'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);

	// console.log('westernNorth allRegionsdata =>', allRegionsdata);

	// allRegionsdata?.find((e) =>
	// 	e.region === 'WESTERN'
	// 		? console.log('eeeee=>', e.total_ndc_presidential)
	// 		: null
	// );

	const [westernNorth, setWesternNorth] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'WESTERN_NORTH'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);

	const [northEast, setNorthEast] = React.useState(
		allRegionsdata?.find((e) =>
			e.region === 'NORTH_EAST'
				? [
						e.total_ndc_presidential,
						e.total_npp_presidential,
						e.total_other_presidential,
				  ]
				: null
		)
	);

	// console.log('nationalResult===>', nationalResult);
	// console.log('allNationalData===>', allNationalData);

	// if(allNationalData){
	const [ndcTotalPercentage, setNdcTotalPercentage] = React.useState(
		nationalResult?.total_ndc_presidential
	);
	const [nppTotalPercentage, setNppTotalPercentage] = React.useState(
		nationalResult?.total_npp_presidential
	);
	const [othersTotalPercentage, setOthersTotalPercentage] = React.useState(
		nationalResult?.total_other_presidential
	);

	const [allNationalAdded, setAllNationalAdded] = React.useState(
		nationalResult?.total_ndc_presidential +
			nationalResult?.total_npp_presidential +
			nationalResult?.total_other_presidential
	);
	// }
	// })

	return (
		<div>
			<Navbar />
			{/* <LinksTab /> */}
			<div className=' flex flex-row p-2 m-1'>
				<div className='basis-2/12'>
					<div className='flex flex-col p-0 m-0'>
						<Link
							passHref
							href='/dashboard/greater-accra'
							className='hover:-translate-y-1'
						>
							<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
								<legend
									className='font-serif text-lg font-semibold tracking-wide text-danger'
									style={{
										fontFamily: 'Playfair Display, serif ',
										// font-optical-sizing: auto;
										// font-weight: <weight>;
										// font-style: normal;
									}}
								>
									Greater Accra
								</legend>
								<div className=' flex flex-row -mt-2'>
									<div className='basis-1/3 flex flex-col'>
										<p
											// className='font-serif text-base font-semibold tracking-wide text-primary'
											className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
											// className='font-serif text-xl font-semibold -mt-2 text-primary'
											className='font-serif text-xl font-semibold -mt-2 text-black'
											style={{
												fontFamily: 'Playfair Display, serif ',
												// font-optical-sizing: auto;
												// font-weight: <weight>;
												// font-style: normal;
											}}
										>
											{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
											{allRegionsdata?.map((e) =>
												e.region === 'GREATER_ACCRA'
													? e.total_ndc_presidential
													: null
											)}
										</p>
									</div>
									<div className='basis-1/3'>
										{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
										<div style={{ width: '50px', height: '50px' }}>
											{/* {console.log('greaterAccra==>', [
												greaterAccra.total_ndc_presidential,
												greaterAccra.total_npp_presidential,
												greaterAccra.total_other_presidential,
											])} */}
											<Pie
												data={{
													labels: [],
													datasets: [
														{
															label: '',
															data: [
																greaterAccra?.total_ndc_presidential,
																greaterAccra?.total_npp_presidential,
																greaterAccra?.total_other_presidential,
															],
															backgroundColor: [
																'rgba(4, 3, 110, 1)',
																'rgba(1, 100, 56, 1)',
																'rgba(206, 212, 218, 1)',
															],
														},
													],
												}}
											/>
										</div>
									</div>
									<div className='basis-1/3 flex flex-col'>
										<p
											className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
											className='font-serif text-xl font-semibold -mt-2 text-black'
											style={{
												fontFamily: 'Playfair Display, serif ',
												// font-optical-sizing: auto;
												// font-weight: <weight>;
												// font-style: normal;
											}}
										>
											{/* {nationalResult?.} */}
											{allRegionsdata?.map((e) =>
												e.region === 'GREATER_ACCRA'
													? e.total_npp_presidential
													: null
											)}
										</p>
									</div>
								</div>
							</fieldset>
						</Link>
						<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-lg font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Brong Ahafo
							</legend>
							<div className=' flex flex-row -mt-2'>
								<div className='basis-1/3 flex flex-col'>
									<p
										// className='font-serif text-base font-semibold tracking-wide text-primary'
										className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										// className='font-serif text-xl font-semibold -mt-2 text-primary'
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
										{allRegionsdata?.map((e) =>
											e.region === 'BRONG_AHAFO'
												? e.total_ndc_presidential
												: null
										)}
									</p>
								</div>
								<div className='basis-1/3'>
									{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('greaterAccra==>', [
											greaterAccra.total_ndc_presidential,
											greaterAccra.total_npp_presidential,
											greaterAccra.total_other_presidential,
										])} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: 'VOTES',
														data: [
															brongAhafo?.total_ndc_presidential,
															brongAhafo?.total_npp_presidential,
															brongAhafo?.total_other_presidential,
														],
														backgroundColor: [
															'rgba(4, 3, 110, 1)',
															'rgba(1, 100, 56, 1)',
															'rgba(206, 212, 218, 1)',
														],
														// borderRadius: 5,
													},
												],
											}}
										/>
									</div>
								</div>
								<div className='basis-1/3 flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {nationalResult?.} */}
										{allRegionsdata?.map((e) =>
											e.region === 'BRONG_AHAFO'
												? e.total_npp_presidential
												: null
										)}
									</p>
								</div>
							</div>
						</fieldset>
						<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-lg font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Central
							</legend>
							<div className=' flex flex-row -mt-2'>
								<div className='basis-1/3 flex flex-col'>
									<p
										// className='font-serif text-base font-semibold tracking-wide text-primary'
										className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										// className='font-serif text-xl font-semibold -mt-2 text-primary'
										className='font-serif text-lg font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
										{allRegionsdata?.map((e) =>
											e.region === 'CENTRAL' ? e.total_ndc_presidential : null
										)}
									</p>
								</div>
								<div className='basis-1/3'>
									{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('greaterAccra==>', [
											greaterAccra.total_ndc_presidential,
											greaterAccra.total_npp_presidential,
											greaterAccra.total_other_presidential,
										])} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: 'VOTES',
														data: [
															central?.total_ndc_presidential,
															central?.total_npp_presidential,
															central?.total_other_presidential,
														],
														backgroundColor: [
															'rgba(4, 3, 110, 1)',
															'rgba(1, 100, 56, 1)',
															'rgba(206, 212, 218, 1)',
														],
														// borderRadius: 5,
													},
												],
											}}
										/>
									</div>
								</div>
								<div className='basis-1/3 flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {nationalResult?.} */}
										{allRegionsdata?.map((e) =>
											e.region === 'CENTRAL' ? e.total_npp_presidential : null
										)}
									</p>
								</div>
							</div>
						</fieldset>
						<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-lg font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Eastern
							</legend>
							<div className=' flex flex-row -mt-2'>
								<div className='basis-1/3 flex flex-col'>
									<p
										// className='font-serif text-base font-semibold tracking-wide text-primary'
										className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										// className='font-serif text-xl font-semibold -mt-2 text-primary'
										className='font-serif text-lg font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
										{allRegionsdata?.map((e) =>
											e.region === 'EASTERN' ? e.total_ndc_presidential : null
										)}
									</p>
								</div>
								<div className='basis-1/3'>
									{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('greaterAccra==>', [
											greaterAccra.total_ndc_presidential,
											greaterAccra.total_npp_presidential,
											greaterAccra.total_other_presidential,
										])} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: 'VOTES',
														data: [
															eastern?.total_ndc_presidential,
															eastern?.total_npp_presidential,
															eastern?.total_other_presidential,
														],
														backgroundColor: [
															'rgba(4, 3, 110, 1)',
															'rgba(1, 100, 56, 1)',
															'rgba(206, 212, 218, 1)',
														],
														// borderRadius: 5,
													},
												],
											}}
										/>
									</div>
								</div>
								<div className='basis-1/3 flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {nationalResult?.} */}
										{allRegionsdata?.map((e) =>
											e.region === 'EASTERN' ? e.total_npp_presidential : null
										)}
									</p>
								</div>
							</div>
						</fieldset>
						<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-lg font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Northern
							</legend>
							<div className=' flex flex-row -mt-2'>
								<div className='basis-1/3 flex flex-col'>
									<p
										// className='font-serif text-base font-semibold tracking-wide text-primary'
										className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										// className='font-serif text-xl font-semibold -mt-2 text-primary'
										className='font-serif text-lg font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
										{allRegionsdata?.map((e) =>
											e.region === 'NORTHERN' ? e.total_ndc_presidential : null
										)}
									</p>
								</div>
								<div className='basis-1/3'>
									{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('greaterAccra==>', [
											greaterAccra.total_ndc_presidential,
											greaterAccra.total_npp_presidential,
											greaterAccra.total_other_presidential,
										])} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: 'VOTES',
														data: [
															eastern?.total_ndc_presidential,
															eastern?.total_npp_presidential,
															eastern?.total_other_presidential,
														],
														backgroundColor: [
															'rgba(4, 3, 110, 1)',
															'rgba(1, 100, 56, 1)',
															'rgba(206, 212, 218, 1)',
														],
														// borderRadius: 5,
													},
												],
											}}
										/>
									</div>
								</div>
								<div className='basis-1/3 flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {nationalResult?.} */}
										{allRegionsdata?.map((e) =>
											e.region === 'NORTHERN' ? e.total_npp_presidential : null
										)}
									</p>
								</div>
							</div>
						</fieldset>
						<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-lg font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Upper East
							</legend>
							<div className=' flex flex-row -mt-2'>
								<div className='basis-1/3 flex flex-col'>
									<p
										// className='font-serif text-base font-semibold tracking-wide text-primary'
										className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										// className='font-serif text-xl font-semibold -mt-2 text-primary'
										className='font-serif text-lg font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
										{allRegionsdata?.map((e) =>
											e.region === 'UPPER_EAST'
												? e.total_ndc_presidential
												: null
										)}
									</p>
								</div>
								<div className='basis-1/3'>
									{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('greaterAccra==>', [
											greaterAccra.total_ndc_presidential,
											greaterAccra.total_npp_presidential,
											greaterAccra.total_other_presidential,
										])} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: 'VOTES',
														data: [
															upperEast?.total_ndc_presidential,
															upperEast?.total_npp_presidential,
															upperEast?.total_other_presidential,
														],
														backgroundColor: [
															'rgba(4, 3, 110, 1)',
															'rgba(1, 100, 56, 1)',
															'rgba(206, 212, 218, 1)',
														],
														// borderRadius: 5,
													},
												],
											}}
										/>
									</div>
								</div>
								<div className='basis-1/3 flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {nationalResult?.} */}
										{allRegionsdata?.map((e) =>
											e.region === 'UPPER_EAST'
												? e.total_npp_presidential
												: null
										)}
									</p>
								</div>
							</div>
						</fieldset>
						<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-lg font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Upper West
							</legend>
							<div className=' flex flex-row -mt-2'>
								<div className='basis-1/3 flex flex-col'>
									<p
										// className='font-serif text-base font-semibold tracking-wide text-primary'
										className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										// className='font-serif text-xl font-semibold -mt-2 text-primary'
										className='font-serif text-lg font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
										{allRegionsdata?.map((e) =>
											e.region === 'UPPER_WEST'
												? e.total_ndc_presidential
												: null
										)}
									</p>
								</div>
								<div className='basis-1/3'>
									{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('greaterAccra==>', [
											greaterAccra.total_ndc_presidential,
											greaterAccra.total_npp_presidential,
											greaterAccra.total_other_presidential,
										])} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: 'VOTES',
														data: [
															upperWest?.total_ndc_presidential,
															upperWest?.total_npp_presidential,
															upperWest?.total_other_presidential,
														],
														backgroundColor: [
															'rgba(4, 3, 110, 1)',
															'rgba(1, 100, 56, 1)',
															'rgba(206, 212, 218, 1)',
														],
														// borderRadius: 5,
													},
												],
											}}
										/>
									</div>
								</div>
								<div className='basis-1/3 flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {nationalResult?.} */}
										{allRegionsdata?.map((e) =>
											e.region === 'UPPER_WEST'
												? e.total_npp_presidential
												: null
										)}
									</p>
								</div>
							</div>
						</fieldset>
						<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-LG font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Volta
							</legend>
							<div className=' flex flex-row -mt-2'>
								<div className='basis-1/3 flex flex-col'>
									<p
										// className='font-serif text-base font-semibold tracking-wide text-primary'
										className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										// className='font-serif text-xl font-semibold -mt-2 text-primary'
										className='font-serif text-lg font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
										{allRegionsdata?.map((e) =>
											e.region === 'VOLTA' ? e.total_ndc_presidential : null
										)}
									</p>
								</div>
								<div className='basis-1/3'>
									{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('greaterAccra==>', [
											greaterAccra.total_ndc_presidential,
											greaterAccra.total_npp_presidential,
											greaterAccra.total_other_presidential,
										])} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: 'VOTES',
														data: [
															volta?.total_ndc_presidential,
															volta?.total_npp_presidential,
															volta?.total_other_presidential,
														],
														backgroundColor: [
															'rgba(4, 3, 110, 1)',
															'rgba(1, 100, 56, 1)',
															'rgba(206, 212, 218, 1)',
														],
														// borderRadius: 5,
													},
												],
											}}
										/>
									</div>
								</div>
								<div className='basis-1/3 flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {nationalResult?.} */}
										{allRegionsdata?.map((e) =>
											e.region === 'VOLTA' ? e.total_npp_presidential : null
										)}
									</p>
								</div>
							</div>
						</fieldset>
					</div>
				</div>
				{/* START OF MAIN BAR CHART IN THE MIDDLE */}
				<div className='basis-8/12 p-2'>
					<div>
						<fieldset className='pb-0.5 m-0.5 h-screen  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
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
												// loading='lazy'
												className='-mt-8'
											/>
										</div>
										<div className=''>
											<p
												className='font-serif -mt-2 text-4xl font-semibold tracking-wide text-white flex justify-center'
												style={{
													fontFamily: 'Playfair Display, serif ',
													// font-optical-sizing: auto;
													// font-weight: <weight>;
													// font-style: normal;
												}}
											>
												{/* {console.log('percentage cal ==>', ndcTotalPercentage)} */}
												{!allNationalData
													? '0'
													: allNationalData?.total_ndc_presidential}
											</p>
											<br />
											<p
												className='font-serif -mt-2 text-lg font-semibold tracking-wide text-white flex justify-center -mt-6'
												style={{
													fontFamily: 'Playfair Display, serif ',
													// font-optical-sizing: auto;
													// font-weight: <weight>;
													// font-style: normal;
												}}
											>
												{/* {console.log('typeof==>', typeof ndcTotalPercentage)} */}
												{/* {console.log(
													'typeof==>',
													allNationalAdded,
													ndcTotalPercentage
												)} */}
												{/* {console.log(
													'totallll=>',
													ndcTotalPercentage +
														nppTotalPercentage +
														othersTotalPercentage
												)} */}
												{/* {(
													(ndcTotalPercentage / allNationalAdded) *
													100
												).toFixed(2)}
												% */}
											</p>
										</div>
									</div>
								</div>
								<div className='basis-1/3'>
									<div className='p-0.5 m-0.5 bg-npp border border-white shadow-xl rounded-lg'>
										<div className='flex justify-center mb-4'>
											<Image
												width={80}
												height={60}
												src={'/nppLogo1.png'}
												alt='Logo'
												// loading='lazy'
												className='-mt-8 '
											/>
										</div>
										<div>
											<p
												className='font-serif -mt-2 text-4xl font-semibold tracking-wide text-white flex justify-center'
												style={{
													fontFamily: 'Playfair Display, serif ',
													// font-optical-sizing: auto;
													// font-weight: <weight>;
													// font-style: normal;
												}}
											>
												{/* {nationalResult?.total_npp_presidential} */}
												{!allNationalData
													? '0'
													: allNationalData?.total_npp_presidential}
											</p>
											<br />
											<p
												className='font-serif -mt-2 text-lg font-semibold tracking-wide text-white flex justify-center -mt-6'
												style={{
													fontFamily: 'Playfair Display, serif ',
													// font-optical-sizing: auto;
													// font-weight: <weight>;
													// font-style: normal;
												}}
											>
												{/* {console.log(
													'totallll=>',
													ndcTotalPercentage +
														nppTotalPercentage +
														othersTotalPercentage
												)} */}
												{/* {(
													(nppTotalPercentage / allNationalAdded) *
													100
												).toFixed(2)}
												% */}
											</p>
										</div>
									</div>
								</div>
								<div className='basis-1/3'>
									<div className='p-0.5 m-0.5 bg-[#ced4da] border border-white shadow-xl rounded-lg'>
										{/* <br /> */}
										<div>
											<p
												className='font-serif -mt-1 text-4xl font-semibold tracking-wide text-black flex justify-center'
												style={{
													fontFamily: 'Playfair Display, serif ',
													// font-optical-sizing: auto;
													// font-weight: <weight>;
													// font-style: normal;
												}}
											>
												{/* {nationalResult?.total_other_presidential} */}
												{!allNationalData
													? '0'
													: allNationalData?.total_other_presidential}
											</p>
											<br />
											<p
												className='font-serif -mt-3 text-lg font-semibold tracking-wide text-black flex justify-center -mt-2 pb-0'
												style={{
													fontFamily: 'Playfair Display, serif ',
													// font-optical-sizing: auto;
													// font-weight: <weight>;
													// font-style: normal;
												}}
											>
												{/* {console.log(
													'totallll=>',
													ndcTotalPercentage +
														nppTotalPercentage +
														othersTotalPercentage
												)} */}
												{/* {(
													(othersTotalPercentage / allNationalAdded) *
													100
												).toFixed(2)}
												% */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<br />
							<div className='flex flex-col'>
								{/* bar chart */}
								<div className=' '>
									<Bar
										data={{
											labels: allRegionsdata?.map((data) => data.region),
											datasets: [
												{
													label: 'NDC',
													data: allRegionsdata?.map(
														(data) => data.total_ndc_presidential
													),
													backgroundColor: ['rgba(1, 100, 56, 1)'],
													borderRadius: 5,
												},
												{
													label: 'NPP',
													data: allRegionsdata?.map(
														(data) => data.total_npp_presidential
													),
													backgroundColor: ['rgba(4, 3, 110, 1)'],
													borderRadius: 5,
												},
												{
													label: 'OTHERS',
													data: allRegionsdata?.map(
														(data) => data.total_other_presidential
													),
													backgroundColor: ['rgba(206, 212, 218, 1)'],
													borderRadius: 5,
												},
											],
										}}
									/>
								</div>

								{/* pie and line chart */}
								<div>
									<div className='flex flex-row'>
										<div className='basis-1/2'>
											{/* <Line
												data={{
													labels: revenueData.map((data) => data.label),
													datasets: [
														{
															label: 'Revenue',
															data: revenueData.map((data) => data.revenue),
															backgroundColor: '#064FF0',
															borderColor: '#064FF0',
														},
														{
															label: 'Cost',
															data: revenueData.map((data) => data.cost),
															backgroundColor: '#FF3030',
															borderColor: '#FF3030',
														},
													],
												}}
												options={{
													elements: {
														line: {
															tension: 0.5,
														},
													},
												}}
											/> */}
										</div>
										<div className='basis-1/2  w-64 h-64'>
											{/* <Doughnut
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
											/> */}
										</div>
									</div>
								</div>
							</div>
						</fieldset>
					</div>
				</div>
				{/* END OF MAIN BAR CHART IN THE MIDDLE */}
				<div className='basis-2/12 p-0 m-0'>
					<div className='flex flex-col p-0 m-0'>
						<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-lg font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Ashanti
							</legend>
							<div className=' flex flex-row -mt-2'>
								<div className='basis-1/3 flex flex-col'>
									<p
										// className='font-serif text-base font-semibold tracking-wide text-primary'
										className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										// className='font-serif text-xl font-semibold -mt-2 text-primary'
										className='font-serif text-lg font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
										{allRegionsdata?.map((e) =>
											e.region === 'ASHANTI' ? e.total_ndc_presidential : null
										)}
									</p>
								</div>
								<div className='basis-1/3'>
									{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('greaterAccra==>', [
											greaterAccra.total_ndc_presidential,
											greaterAccra.total_npp_presidential,
											greaterAccra.total_other_presidential,
										])} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: 'VOTES',
														data: [
															ashanti?.total_ndc_presidential,
															ashanti?.total_npp_presidential,
															ashanti?.total_other_presidential,
														],
														backgroundColor: [
															'rgba(4, 3, 110, 1)',
															'rgba(1, 100, 56, 1)',
															'rgba(206, 212, 218, 1)',
														],
														// borderRadius: 5,
													},
												],
											}}
										/>
									</div>
								</div>
								<div className='basis-1/3 flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {nationalResult?.} */}
										{allRegionsdata?.map((e) =>
											e.region === 'ASHANTI' ? e.total_npp_presidential : null
										)}
									</p>
								</div>
							</div>
						</fieldset>
						<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-lg font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Western
							</legend>
							<div className=' flex flex-row -mt-2'>
								<div className='basis-1/3 flex flex-col'>
									<p
										// className='font-serif text-base font-semibold tracking-wide text-primary'
										className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										// className='font-serif text-xl font-semibold -mt-2 text-primary'
										className='font-serif text-lg font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
										{allRegionsdata?.map((e) =>
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)}
									</p>
								</div>
								<div className='basis-1/3'>
									{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
									<div style={{ width: '50px', height: '50px' }}>
										{console.log('western==>', [western])}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: 'VOTES',
														data: [
															western?.total_ndc_presidential,
															western?.total_npp_presidential,
															western?.total_other_presidential,
														],
														backgroundColor: [
															'rgba(4, 3, 110, 1)',
															'rgba(1, 100, 56, 1)',
															'rgba(206, 212, 218, 1)',
														],
														// borderRadius: 5,
													},
												],
											}}
										/>
									</div>
								</div>
								<div className='basis-1/3 flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {console.log('===>', allRegionsdata)} */}
										{allRegionsdata?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)}
									</p>
								</div>
							</div>
						</fieldset>
						<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-lg font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Savannah
							</legend>
							<div className=' flex flex-row -mt-2'>
								<div className='basis-1/3 flex flex-col'>
									<p
										// className='font-serif text-base font-semibold tracking-wide text-primary'
										className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										// className='font-serif text-xl font-semibold -mt-2 text-primary'
										className='font-serif text-lg font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
										{allRegionsdata?.map((e) =>
											e.region === 'SAVANNAH' ? e.total_ndc_presidential : null
										)}
									</p>
								</div>
								<div className='basis-1/3'>
									{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('greaterAccra==>', [
											greaterAccra.total_ndc_presidential,
											greaterAccra.total_npp_presidential,
											greaterAccra.total_other_presidential,
										])} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: 'VOTES',
														data: [
															savannah?.total_ndc_presidential,
															savannah?.total_npp_presidential,
															savannah?.total_other_presidential,
														],
														backgroundColor: [
															'rgba(4, 3, 110, 1)',
															'rgba(1, 100, 56, 1)',
															'rgba(206, 212, 218, 1)',
														],
														// borderRadius: 5,
													},
												],
											}}
										/>
									</div>
								</div>
								<div className='basis-1/3 flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {nationalResult?.} */}
										{allRegionsdata?.map((e) =>
											e.region === 'SAVANNAH' ? e.total_npp_presidential : null
										)}
									</p>
								</div>
							</div>
						</fieldset>
						<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-lg font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Bono East
							</legend>
							<div className=' flex flex-row -mt-2'>
								<div className='basis-1/3 flex flex-col'>
									<p
										// className='font-serif text-base font-semibold tracking-wide text-primary'
										className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										// className='font-serif text-xl font-semibold -mt-2 text-primary'
										className='font-serif text-lg font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
										{allRegionsdata?.map((e) =>
											e.region === 'BONO_EAST' ? e.total_ndc_presidential : null
										)}
									</p>
								</div>
								<div className='basis-1/3'>
									{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('greaterAccra==>', [
											greaterAccra.total_ndc_presidential,
											greaterAccra.total_npp_presidential,
											greaterAccra.total_other_presidential,
										])} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: 'VOTES',
														data: [
															bonoEast?.total_ndc_presidential,
															bonoEast?.total_npp_presidential,
															bonoEast?.total_other_presidential,
														],
														backgroundColor: [
															'rgba(4, 3, 110, 1)',
															'rgba(1, 100, 56, 1)',
															'rgba(206, 212, 218, 1)',
														],
														// borderRadius: 5,
													},
												],
											}}
										/>
									</div>
								</div>
								<div className='basis-1/3 flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {nationalResult?.} */}
										{allRegionsdata?.map((e) =>
											e.region === 'BONO_EAST' ? e.total_npp_presidential : null
										)}
									</p>
								</div>
							</div>
						</fieldset>
						<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-lg font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Oti
							</legend>
							<div className=' flex flex-row -mt-2'>
								<div className='basis-1/3 flex flex-col'>
									<p
										// className='font-serif text-base font-semibold tracking-wide text-primary'
										className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										// className='font-serif text-xl font-semibold -mt-2 text-primary'
										className='font-serif text-lg font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
										{allRegionsdata?.map((e) =>
											e.region === 'OTI' ? e.total_ndc_presidential : null
										)}
									</p>
								</div>
								<div className='basis-1/3'>
									{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('greaterAccra==>', [
											greaterAccra.total_ndc_presidential,
											greaterAccra.total_npp_presidential,
											greaterAccra.total_other_presidential,
										])} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: 'VOTES',
														data: [
															oti?.total_ndc_presidential,
															oti?.total_npp_presidential,
															oti?.total_other_presidential,
														],
														backgroundColor: [
															'rgba(4, 3, 110, 1)',
															'rgba(1, 100, 56, 1)',
															'rgba(206, 212, 218, 1)',
														],
														// borderRadius: 5,
													},
												],
											}}
										/>
									</div>
								</div>
								<div className='basis-1/3 flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {nationalResult?.} */}
										{allRegionsdata?.map((e) =>
											e.region === 'OTI' ? e.total_npp_presidential : null
										)}
									</p>
								</div>
							</div>
						</fieldset>
						<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-lg font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Ahafo
							</legend>
							<div className=' flex flex-row -mt-2'>
								<div className='basis-1/3 flex flex-col'>
									<p
										// className='font-serif text-base font-semibold tracking-wide text-primary'
										className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										// className='font-serif text-xl font-semibold -mt-2 text-primary'
										className='font-serif text-lg font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
										{allRegionsdata?.map((e) =>
											e.region === 'AHAFO' ? e.total_ndc_presidential : null
										)}
									</p>
								</div>
								<div className='basis-1/3'>
									{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('greaterAccra==>', [
											greaterAccra.total_ndc_presidential,
											greaterAccra.total_npp_presidential,
											greaterAccra.total_other_presidential,
										])} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: 'VOTES',
														data: [
															ahafo?.total_ndc_presidential,
															ahafo?.total_npp_presidential,
															ahafo?.total_other_presidential,
														],
														backgroundColor: [
															'rgba(4, 3, 110, 1)',
															'rgba(1, 100, 56, 1)',
															'rgba(206, 212, 218, 1)',
														],
														// borderRadius: 5,
													},
												],
											}}
										/>
									</div>
								</div>
								<div className='basis-1/3 flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {nationalResult?.} */}
										{allRegionsdata?.map((e) =>
											e.region === 'AHAFO' ? e.total_npp_presidential : null
										)}
									</p>
								</div>
							</div>
						</fieldset>
						<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-lg font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Western North
							</legend>
							<div className=' flex flex-row -mt-2'>
								<div className='basis-1/3 flex flex-col'>
									<p
										// className='font-serif text-base font-semibold tracking-wide text-primary'
										className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										// className='font-serif text-xl font-semibold -mt-2 text-primary'
										className='font-serif text-lg font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
										{allRegionsdata?.map((e) =>
											e.region === 'WESTERN_NORTH'
												? e.total_ndc_presidential
												: null
										)}
									</p>
								</div>
								<div className='basis-1/3'>
									{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('greaterAccra==>', [
											greaterAccra.total_ndc_presidential,
											greaterAccra.total_npp_presidential,
											greaterAccra.total_other_presidential,
										])} */}
										{/* {console.log('WESTERN ==>', westernNorth)} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: 'VOTES',
														data: [
															westernNorth?.total_ndc_presidential,
															westernNorth?.total_npp_presidential,
															westernNorth?.total_other_presidential,
														],
														backgroundColor: [
															'rgba(4, 3, 110, 1)',
															'rgba(1, 100, 56, 1)',
															'rgba(206, 212, 218, 1)',
														],
														// borderRadius: 5,
													},
												],
											}}
										/>
									</div>
								</div>
								<div className='basis-1/3 flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{allRegionsdata?.map((e) =>
											e.region === 'WESTERN_NORTH'
												? e.total_npp_presidential
												: null
										)}
									</p>
								</div>
							</div>
						</fieldset>
						<fieldset className='p-0.5 m-0.5 dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded-lg  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-lg font-semibold tracking-wide text-danger'
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								North East
							</legend>
							<div className=' flex flex-row -mt-2'>
								<div className='basis-1/3 flex flex-col'>
									<p
										// className='font-serif text-base font-semibold tracking-wide text-primary'
										className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										// className='font-serif text-xl font-semibold -mt-2 text-primary'
										className='font-serif text-lg font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {regionalResult?.map((e) => console.log('eee=>', e))} */}
										{allRegionsdata?.map((e) =>
											e.region === 'NORTH_EAST'
												? e.total_ndc_presidential
												: null
										)}
									</p>
								</div>
								<div className='basis-1/3'>
									{/* <RingProgress
											size={60}
											thickness={10}
											roundCaps
											rootColor='white'
											sections={[
												{ value: 50, color: '#016438' },
												{ value: 15, color: '#04036e' },
												{ value: 5, color: '#ced4da' },
											]}
										/> */}
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('greaterAccra==>', [
											greaterAccra.total_ndc_presidential,
											greaterAccra.total_npp_presidential,
											greaterAccra.total_other_presidential,
										])} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: '',
														data: [
															northEast?.total_ndc_presidential,
															northEast?.total_npp_presidential,
															northEast?.total_other_presidential,
														],
														backgroundColor: [
															'rgba(4, 3, 110, 1)',
															'rgba(1, 100, 56, 1)',
															'rgba(206, 212, 218, 1)',
														],
														// borderRadius: 5,
													},
												],
											}}
										/>
									</div>
								</div>
								<div className='basis-1/3 flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-black'
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
										className='font-serif text-xl font-semibold -mt-2 text-black'
										style={{
											fontFamily: 'Playfair Display, serif ',
											// font-optical-sizing: auto;
											// font-weight: <weight>;
											// font-style: normal;
										}}
									>
										{/* {nationalResult?.} */}
										{allRegionsdata?.map((e) =>
											e.region === 'NORTH_EAST'
												? e.total_npp_presidential
												: null
										)}
									</p>
								</div>
							</div>
						</fieldset>
					</div>
				</div>
			</div>
		</div>
	);
}
