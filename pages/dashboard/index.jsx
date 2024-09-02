import React, { useEffect } from 'react';
import Navbar from '../../components/snippets/NavBarNew';
import Image from 'next/image';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import Pusher from 'pusher-js';

export default function Home() {
	const [nationalResult, setNationalResult] = React.useState(null);
	const [regionalResult, setRegionalResult] = React.useState(null);
	// const [count, setCount] = React.useState(0);

	defaults.maintainAspectRatio = false;
	defaults.responsive = true;

	// ALL REGIONS
	const [greaterAccra, setGreaterAccra] = React.useState();
	const [brongAhafo, setBrongAhafo] = React.useState();
	const [central, setCentral] = React.useState();
	const [eastern, setEastern] = React.useState();
	const [northern, setNorthern] = React.useState();
	const [upperEast, setUpperEast] = React.useState();
	const [upperWest, setUpperWest] = React.useState();
	const [volta, setVolta] = React.useState();
	//
	const [ashanti, setAshanti] = React.useState();
	const [western, setWestern] = React.useState();
	const [savannah, setSavannah] = React.useState();
	const [bonoEast, setBonoEast] = React.useState();
	const [oti, setOti] = React.useState();
	const [ahafo, setAhafo] = React.useState();
	const [westernNorth, setWesternNorth] = React.useState();
	const [northEast, setNorthEast] = React.useState();

	// NATIONAL PERCENTATGES
	const [ndcTotalPercentage, setNdcTotalPercentage] = React.useState();
	const [nppTotalPercentage, setNppTotalPercentage] = React.useState();
	const [othersTotalPercentage, setOthersTotalPercentage] = React.useState();
	const [allNationalAdded, setAllNationalAdded] = React.useState();

	useEffect(() => {
		setTimeout(() => {
			if (typeof window !== 'undefined') {
				const cachedNationalData = localStorage.getItem('national-results');
				const cachedRegionalData = localStorage.getItem('regional-results');
				if (cachedNationalData) {
					console.log('cachedNationalData==>', cachedNationalData);
					// setAllNationalData(JSON.parse(cachedNationalData));
					setNationalResult(JSON.parse(cachedNationalData));
					// return;
				}
				if (cachedRegionalData) {
					console.log('cachedRegionalData==>', cachedRegionalData);
					// setAllRegionsdata(JSON.parse(cachedRegionalData));
					setRegionalResult(JSON.parse(cachedRegionalData));
					// return;
				}
				// return;
			}
			//
			const pusher = new Pusher('566a742e0e344fa68a5a', {
				cluster: 'mt1',
			});

			const channel = pusher.subscribe('national-results');
			channel.bind('update', function (data) {
				console.log('national-results=>', data?.data);
				// setNationalResult([]);

				setNationalResult(data?.data);
				localStorage.setItem('national-results', JSON.stringify(data?.data)); // Cache data
				// console.log('nationalResult=>', nationalResult);
			});

			const channel2 = pusher.subscribe('regional-results');
			channel2.bind('update', function (data) {
				console.log('regional-results=>', data?.data);
				setRegionalResult(data?.data);
				localStorage.setItem('regional-results', JSON.stringify(data?.data)); // Cache data
			});
			// setCount((count) => count + 1);

			regionalResult?.find((e) =>
				e.region === 'GREATER_ACCRA'
					? setGreaterAccra([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);
			regionalResult?.find((e) =>
				e.region === 'BRONG_AHAFO'
					? setBrongAhafo([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);

			regionalResult?.find((e) =>
				e.region === 'CENTRAL'
					? setCentral([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);

			regionalResult?.find((e) =>
				e.region === 'EASTERN'
					? setEastern([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);

			regionalResult?.find((e) =>
				e.region === 'NORTHERN'
					? setNorthern([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);

			regionalResult?.find((e) =>
				e.region === 'UPPER_EAST'
					? setUpperEast([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);

			regionalResult?.find((e) =>
				e.region === 'UPPER_WEST'
					? setUpperWest([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);

			regionalResult?.find((e) =>
				e.region === 'VOLTA'
					? setVolta([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);

			regionalResult?.find((e) =>
				e.region === 'ASHANTI'
					? setAshanti([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);

			regionalResult?.find((e) =>
				e.region === 'WESTERN'
					? setWestern([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);

			regionalResult?.find((e) =>
				e.region === 'SAVANNAH'
					? setSavannah([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);

			regionalResult?.find((e) =>
				e.region === 'BONO_EAST'
					? setBonoEast([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);

			regionalResult?.find((e) =>
				e.region === 'OTI'
					? setOti([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);

			regionalResult?.find((e) =>
				e.region === 'AHAFO'
					? setAhafo([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);

			regionalResult?.find((e) =>
				e.region === 'WESTERN_NORTH'
					? setWesternNorth([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);

			regionalResult?.find((e) =>
				e.region === 'NORTH_EAST'
					? setNorthEast([
							e.total_ndc_presidential,
							e.total_npp_presidential,
							e.total_other_presidential,
					  ])
					: null
			);

			// NATIONAL ADDITIONS FOR PERCENTAGES
			setNdcTotalPercentage(nationalResult?.total_ndc_presidential);
			setNppTotalPercentage(nationalResult?.total_npp_presidential);
			setOthersTotalPercentage(nationalResult?.total_other_presidential);
			setAllNationalAdded(
				nationalResult?.total_ndc_presidential +
					nationalResult?.total_npp_presidential +
					nationalResult?.total_other_presidential
			);
			// }, 300000);
		}, 5000);
	});

	return (
		<div>
			<Navbar />
			<div className='  flex flex-col md:flex-row lg:flex-row p-2 m-1'>
				<div className='basis-3/12 md:basis-3/12 lg:basis-2/12'>
					<div className='flex flex-col p-0 m-0'>
						{/* Accra */}
						<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-base font-semibold tracking-wide '
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Greater Accra
							</legend>
							<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
								<div className='  flex flex-col'>
									<p
										className='font-serif text-base font-semibold tracking-wide text-primary'
										// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										{greaterAccra ? greaterAccra[0] : '0'}
										{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
									</p>
								</div>
								<div className=' flex flex-col'>
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
										{/* {console.log('western==>', western)} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: '',
														// data: [10, 50, 60],
														data: greaterAccra,
														backgroundColor: [
															'rgba(1, 100, 56, 1)',
															'rgba(4, 3, 110, 1)',
															'rgba(206, 212, 218, 1)',
														],
													},
												],
											}}
										/>
									</div>
								</div>
								<div className=' flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
										{greaterAccra ? greaterAccra[1] : '0'}
										{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
									</p>
								</div>
							</div>
						</fieldset>
						{/* Brong Ahafo */}
						<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-base font-semibold tracking-wide '
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Brong Ahafo
							</legend>
							<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
								<div className='  flex flex-col'>
									<p
										className='font-serif text-base font-semibold tracking-wide text-primary'
										// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										{brongAhafo ? brongAhafo[0] : '0'}
										{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
									</p>
								</div>
								<div className=' flex flex-col'>
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
										{/* {console.log('western==>', western)} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: '',
														// data: [10, 50, 60],
														data: brongAhafo,
														backgroundColor: [
															'rgba(1, 100, 56, 1)',
															'rgba(4, 3, 110, 1)',
															'rgba(206, 212, 218, 1)',
														],
													},
												],
											}}
										/>
									</div>
								</div>
								<div className=' flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
										{brongAhafo ? brongAhafo[1] : '0'}
										{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
									</p>
								</div>
							</div>
						</fieldset>
						{/*  Central*/}
						<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-base font-semibold tracking-wide '
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Central
							</legend>
							<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
								<div className='  flex flex-col'>
									<p
										className='font-serif text-base font-semibold tracking-wide text-primary'
										// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										{central ? central[0] : '0'}
										{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
									</p>
								</div>
								<div className=' flex flex-col'>
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
										{/* {console.log('western==>', western)} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: '',
														// data: [10, 50, 60],
														data: central,
														backgroundColor: [
															'rgba(1, 100, 56, 1)',
															'rgba(4, 3, 110, 1)',
															'rgba(206, 212, 218, 1)',
														],
													},
												],
											}}
										/>
									</div>
								</div>
								<div className=' flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
										{central ? central[1] : '0'}
										{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
									</p>
								</div>
							</div>
						</fieldset>
						{/* Eastern */}
						<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-base font-semibold tracking-wide '
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Eastern
							</legend>
							<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
								<div className='  flex flex-col'>
									<p
										className='font-serif text-base font-semibold tracking-wide text-primary'
										// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										{eastern ? eastern[0] : '0'}
										{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
									</p>
								</div>
								<div className=' flex flex-col'>
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
										{/* {console.log('western==>', western)} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: '',
														// data: [10, 50, 60],
														data: eastern,
														backgroundColor: [
															'rgba(1, 100, 56, 1)',
															'rgba(4, 3, 110, 1)',
															'rgba(206, 212, 218, 1)',
														],
													},
												],
											}}
										/>
									</div>
								</div>
								<div className=' flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
										{eastern ? eastern[1] : '0'}
										{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
									</p>
								</div>
							</div>
						</fieldset>
						{/* Northern */}
						<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-base font-semibold tracking-wide '
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Northern
							</legend>
							<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
								<div className='  flex flex-col'>
									<p
										className='font-serif text-base font-semibold tracking-wide text-primary'
										// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										{northern ? northern[0] : '0'}
										{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
									</p>
								</div>
								<div className=' flex flex-col'>
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
										{/* {console.log('western==>', western)} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: '',
														// data: [10, 50, 60],
														data: northern,
														backgroundColor: [
															'rgba(1, 100, 56, 1)',
															'rgba(4, 3, 110, 1)',
															'rgba(206, 212, 218, 1)',
														],
													},
												],
											}}
										/>
									</div>
								</div>
								<div className=' flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
										{northern ? northern[1] : '0'}
										{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
									</p>
								</div>
							</div>
						</fieldset>
						{/*  Upper East */}
						<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-base font-semibold tracking-wide '
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Upper East
							</legend>
							<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
								<div className='  flex flex-col'>
									<p
										className='font-serif text-base font-semibold tracking-wide text-primary'
										// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										{upperEast ? upperEast[0] : '0'}
										{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
									</p>
								</div>
								<div className=' flex flex-col'>
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
										{/* {console.log('western==>', western)} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: '',
														// data: [10, 50, 60],
														data: upperEast,
														backgroundColor: [
															'rgba(1, 100, 56, 1)',
															'rgba(4, 3, 110, 1)',
															'rgba(206, 212, 218, 1)',
														],
													},
												],
											}}
										/>
									</div>
								</div>
								<div className=' flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
										{upperEast ? upperEast[1] : '0'}
										{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
									</p>
								</div>
							</div>
						</fieldset>
						{/* Upper West */}
						<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-base font-semibold tracking-wide '
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Upper West
							</legend>
							<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
								<div className='  flex flex-col'>
									<p
										className='font-serif text-base font-semibold tracking-wide text-primary'
										// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										{upperWest ? upperWest[0] : '0'}
										{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
									</p>
								</div>
								<div className=' flex flex-col'>
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
										{/* {console.log('western==>', western)} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: '',
														// data: [10, 50, 60],
														data: upperWest,
														backgroundColor: [
															'rgba(1, 100, 56, 1)',
															'rgba(4, 3, 110, 1)',
															'rgba(206, 212, 218, 1)',
														],
													},
												],
											}}
										/>
									</div>
								</div>
								<div className=' flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
										{upperWest ? upperWest[1] : '0'}
										{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
									</p>
								</div>
							</div>
						</fieldset>
						{/* Volta */}
						<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
							<legend
								className='font-serif text-base font-semibold tracking-wide '
								style={{
									fontFamily: 'Playfair Display, serif ',
									// font-optical-sizing: auto;
									// font-weight: <weight>;
									// font-style: normal;
								}}
							>
								Volta
							</legend>
							<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
								<div className='  flex flex-col'>
									<p
										className='font-serif text-base font-semibold tracking-wide text-primary'
										// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
										{volta ? volta[0] : '0'}
										{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
									</p>
								</div>
								<div className=' flex flex-col'>
									<div style={{ width: '50px', height: '50px' }}>
										{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
										{/* {console.log('western==>', western)} */}
										<Pie
											data={{
												labels: [],
												datasets: [
													{
														label: '',
														// data: [10, 50, 60],
														data: volta,
														backgroundColor: [
															'rgba(1, 100, 56, 1)',
															'rgba(4, 3, 110, 1)',
															'rgba(206, 212, 218, 1)',
														],
													},
												],
											}}
										/>
									</div>
								</div>
								<div className=' flex flex-col'>
									<p
										className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
										{volta ? volta[1] : '0'}
										{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
									</p>
								</div>
							</div>
						</fieldset>
					</div>
				</div>
				{/* START OF MAIN BAR CHART IN THE MIDDLE */}
				<div className='basis-3/12 md:basis-6/12 lg:basis-8/12'>
					<fieldset className='pb-0.5 m-0.5 h-full max-h-full   dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded border border-primary  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-base font-semibold tracking-wide '
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Presidential
						</legend>
						<div className=' grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-3  mt-4'>
							<div className='basis:1/2 sm:basis-1/3  md:basis-1/3 lg:basis-1/3'>
								<div className='p-0.5 m-0.5 bg-primary border border-white shadow-xl rounded-lg'>
									<div className='flex justify-center'>
										<Image
											width={80}
											height={60}
											src={'/partyLogo1.png'}
											alt='Logo'
											// loading='lazy'
											className='-mt-8'
										/>
									</div>
									<div className='flex flex-row justify-between p-0.5'>
										<p
											className='font-serif -mt-1 text-2xl font-semibold tracking-wide text-white flex justify-center'
											style={{
												fontFamily: 'Playfair Display, serif ',
												// font-optical-sizing: auto;
												// font-weight: <weight>;
												// font-style: normal;
											}}
										>
											{/* {console.log('dis dis=>', nationalResult)} */}
											{/* {console.log('percentage cal ==>', ndcTotalPercentage)} */}
											{nationalResult
												? nationalResult?.total_ndc_presidential
												: '0'}
										</p>
										<br />
										<p
											className='font-serif text-base font-semibold tracking-wide text-white flex justify-center '
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
											{((ndcTotalPercentage / allNationalAdded) * 100).toFixed(
												2
											)}
											%
										</p>
									</div>
								</div>
							</div>
							<div className='basis:1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/3'>
								<div className='p-0.5 m-0.5 bg-npp border border-white shadow-xl rounded-lg'>
									<div className='flex justify-center '>
										<Image
											width={80}
											height={60}
											src={'/nppLogo1.png'}
											alt='Logo'
											// loading='lazy'
											className='-mt-8 '
										/>
									</div>
									<div className='flex flex-row justify-between p-0.5'>
										<p
											className='font-serif -mt-1 text-2xl font-semibold tracking-wide text-white flex justify-center'
											style={{
												fontFamily: 'Playfair Display, serif ',
												// font-optical-sizing: auto;
												// font-weight: <weight>;
												// font-style: normal;
											}}
										>
											{/* {nationalResult?.total_npp_presidential} */}
											{nationalResult
												? nationalResult?.total_npp_presidential
												: '0'}
										</p>
										<br />
										<p
											className='font-serif text-base font-semibold tracking-wide text-white flex justify-center '
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
											{((nppTotalPercentage / allNationalAdded) * 100).toFixed(
												2
											)}
											%
										</p>
									</div>
								</div>
							</div>
							<div className=' sm:basis-1/3 md:basis-1/3 lg:basis-1/3'>
								<div className='p-0.5 m-0.5 bg-[#ced4da] border border-white shadow-xl rounded-lg'>
									{/* <br /> */}
									<div className='flex flex-row justify-between p-0.5'>
										<p
											className='font-serif -mt-1 text-2xl font-semibold tracking-wide text-black flex justify-center'
											style={{
												fontFamily: 'Playfair Display, serif ',
												// font-optical-sizing: auto;
												// font-weight: <weight>;
												// font-style: normal;
											}}
										>
											{/* {nationalResult?.total_other_presidential} */}
											{nationalResult
												? nationalResult?.total_other_presidential
												: '0'}
										</p>
										<br />
										<p
											className='font-serif  text-base font-semibold tracking-wide text-black flex justify-center '
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
											{(
												(othersTotalPercentage / allNationalAdded) *
												100
											).toFixed(2)}
											%
										</p>
									</div>
								</div>
							</div>
						</div>
						<br />
						<br />
						{/* <br /> */}
						<div className=''>
							{/* bar chart */}
							<div className='min-w-full h-full max-h-full sm:min-w-full md:min-w-full lg:w-max'>
								<Bar
									className='h-full sm:h-96 m:h-96'
									data={{
										labels: regionalResult?.map((data) => data.region),
										datasets: [
											{
												label: 'NDC',
												data: regionalResult?.map(
													(data) => data.total_ndc_presidential
												),
												backgroundColor: ['rgba(1, 100, 56, 1)'],
												borderRadius: 5,
											},
											{
												label: 'NPP',
												data: regionalResult?.map(
													(data) => data.total_npp_presidential
												),
												backgroundColor: ['rgba(4, 3, 110, 1)'],
												borderRadius: 5,
											},
											{
												label: 'OTHERS',
												data: regionalResult?.map(
													(data) => data.total_other_presidential
												),
												backgroundColor: ['rgba(206, 212, 218, 1)'],
												borderRadius: 5,
											},
										],
										options: {
											maintainAspectRatio: true,
										},
									}}
									options={{
										aspectRatio: false,
									}}
								/>
							</div>
						</div>
					</fieldset>
				</div>
				{/* END OF MAIN BAR CHART IN THE MIDDLE */}

				<div className='basis-3/12 md:basis-3/12 lg:basis-2/12'>
					{/* ASHANTI */}
					<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-base font-semibold tracking-wide '
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ashanti
						</legend>
						<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
							<div className='  flex flex-col'>
								<p
									className='font-serif text-base font-semibold tracking-wide text-primary'
									// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
									{ashanti ? ashanti[0] : '0'}
									{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
								</p>
							</div>
							<div className=' flex flex-col'>
								<div style={{ width: '50px', height: '50px' }}>
									{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
									{/* {console.log('western==>', western)} */}
									<Pie
										data={{
											labels: [],
											datasets: [
												{
													label: '',
													// data: [10, 50, 60],
													data: ashanti,
													backgroundColor: [
														'rgba(1, 100, 56, 1)',
														'rgba(4, 3, 110, 1)',
														'rgba(206, 212, 218, 1)',
													],
												},
											],
										}}
									/>
								</div>
							</div>
							<div className=' flex flex-col'>
								<p
									className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
									{ashanti ? ashanti[1] : '0'}
									{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
								</p>
							</div>
						</div>
					</fieldset>
					{/* WESTERN */}
					<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-base font-semibold tracking-wide '
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Western
						</legend>
						<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
							<div className='  flex flex-col'>
								<p
									className='font-serif text-base font-semibold tracking-wide text-primary'
									// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
									{console.log('western western =>', western)}
									{western ? western[0] : '0'}
									{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
								</p>
							</div>
							<div className=' flex flex-col'>
								<div style={{ width: '50px', height: '50px' }}>
									{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
									{/* {console.log('western==>', western)} */}
									<Pie
										data={{
											labels: [],
											datasets: [
												{
													label: '',
													// data: [10, 50, 60],
													data: western,
													backgroundColor: [
														'rgba(1, 100, 56, 1)',
														'rgba(4, 3, 110, 1)',
														'rgba(206, 212, 218, 1)',
													],
												},
											],
										}}
									/>
								</div>
							</div>
							<div className=' flex flex-col'>
								<p
									className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
									{western ? western[1] : '0'}
									{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
								</p>
							</div>
						</div>
					</fieldset>
					{/* SAVANNAH */}
					<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-base font-semibold tracking-wide '
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Savannah
						</legend>
						<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
							<div className='  flex flex-col'>
								<p
									className='font-serif text-base font-semibold tracking-wide text-primary'
									// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
									{savannah ? savannah[0] : '0'}
									{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
								</p>
							</div>
							<div className=' flex flex-col'>
								<div style={{ width: '50px', height: '50px' }}>
									{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
									{/* {console.log('western==>', western)} */}
									<Pie
										data={{
											labels: [],
											datasets: [
												{
													label: '',
													// data: [10, 50, 60],
													data: savannah,
													backgroundColor: [
														'rgba(1, 100, 56, 1)',
														'rgba(4, 3, 110, 1)',
														'rgba(206, 212, 218, 1)',
													],
												},
											],
										}}
									/>
								</div>
							</div>
							<div className=' flex flex-col'>
								<p
									className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
									{savannah ? savannah[1] : '0'}
									{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
								</p>
							</div>
						</div>
					</fieldset>
					{/* BONO_EAST */}
					<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-base font-semibold tracking-wide '
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Bono East
						</legend>
						<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
							<div className='  flex flex-col'>
								<p
									className='font-serif text-base font-semibold tracking-wide text-primary'
									// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
									{bonoEast ? bonoEast[0] : '0'}
									{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
								</p>
							</div>
							<div className=' flex flex-col'>
								<div style={{ width: '50px', height: '50px' }}>
									{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
									{/* {console.log('western==>', western)} */}
									<Pie
										data={{
											labels: [],
											datasets: [
												{
													label: '',
													// data: [10, 50, 60],
													data: bonoEast,
													backgroundColor: [
														'rgba(1, 100, 56, 1)',
														'rgba(4, 3, 110, 1)',
														'rgba(206, 212, 218, 1)',
													],
												},
											],
										}}
									/>
								</div>
							</div>
							<div className=' flex flex-col'>
								<p
									className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
									{bonoEast ? bonoEast[1] : '0'}
									{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
								</p>
							</div>
						</div>
					</fieldset>
					{/*  Oti*/}
					<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-base font-semibold tracking-wide '
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Oti
						</legend>
						<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
							<div className='  flex flex-col'>
								<p
									className='font-serif text-base font-semibold tracking-wide text-primary'
									// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
									{oti ? oti[0] : '0'}
									{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
								</p>
							</div>
							<div className=' flex flex-col'>
								<div style={{ width: '50px', height: '50px' }}>
									{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
									{/* {console.log('western==>', western)} */}
									<Pie
										data={{
											labels: [],
											datasets: [
												{
													label: '',
													// data: [10, 50, 60],
													data: oti,
													backgroundColor: [
														'rgba(1, 100, 56, 1)',
														'rgba(4, 3, 110, 1)',
														'rgba(206, 212, 218, 1)',
													],
												},
											],
										}}
									/>
								</div>
							</div>
							<div className=' flex flex-col'>
								<p
									className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
									{oti ? oti[1] : '0'}
									{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
								</p>
							</div>
						</div>
					</fieldset>
					{/*  Ahafo*/}
					<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-base font-semibold tracking-wide '
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Ahafo
						</legend>
						<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
							<div className='  flex flex-col'>
								<p
									className='font-serif text-base font-semibold tracking-wide text-primary'
									// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
									{ahafo ? ahafo[0] : '0'}
									{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
								</p>
							</div>
							<div className=' flex flex-col'>
								<div style={{ width: '50px', height: '50px' }}>
									{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
									{/* {console.log('western==>', western)} */}
									<Pie
										data={{
											labels: [],
											datasets: [
												{
													label: '',
													// data: [10, 50, 60],
													data: ahafo,
													backgroundColor: [
														'rgba(1, 100, 56, 1)',
														'rgba(4, 3, 110, 1)',
														'rgba(206, 212, 218, 1)',
													],
												},
											],
										}}
									/>
								</div>
							</div>
							<div className=' flex flex-col'>
								<p
									className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
									{ahafo ? ahafo[1] : '0'}
									{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
								</p>
							</div>
						</div>
					</fieldset>
					{/* Western North */}
					<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-base font-semibold tracking-wide '
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							Western North
						</legend>
						<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
							<div className='  flex flex-col'>
								<p
									className='font-serif text-base font-semibold tracking-wide text-primary'
									// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
									{westernNorth ? westernNorth[0] : '0'}
									{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
								</p>
							</div>
							<div className=' flex flex-col'>
								<div style={{ width: '50px', height: '50px' }}>
									{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
									{/* {console.log('western==>', western)} */}
									<Pie
										data={{
											labels: [],
											datasets: [
												{
													label: '',
													// data: [10, 50, 60],
													data: westernNorth,
													backgroundColor: [
														'rgba(1, 100, 56, 1)',
														'rgba(4, 3, 110, 1)',
														'rgba(206, 212, 218, 1)',
													],
												},
											],
										}}
									/>
								</div>
							</div>
							<div className=' flex flex-col'>
								<p
									className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
									{westernNorth ? westernNorth[1] : '0'}
									{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
								</p>
							</div>
						</div>
					</fieldset>
					{/* North East  */}
					<fieldset className='pb-0.5 m-0.5  dark:bg-gray-800  dark:border-gray-700 dark:hover:bg-gray-700 block  rounded  border border-slate-300  bg-white p-0.5 shadow-xl'>
						<legend
							className='font-serif text-base font-semibold tracking-wide '
							style={{
								fontFamily: 'Playfair Display, serif ',
								// font-optical-sizing: auto;
								// font-weight: <weight>;
								// font-style: normal;
							}}
						>
							North East
						</legend>
						<div className=' grid grid-cols-3 gap-1 sm:grid-cols-3 md:grid-cols-3 -mt-2'>
							<div className='  flex flex-col'>
								<p
									className='font-serif text-base font-semibold tracking-wide text-primary'
									// className='font-serif text-sm mt-2 font-semibold tracking-wide text-black'
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
									{northEast ? northEast[0] : '0'}
									{/* {regionalResult?.map((e) =>
											// e.region === 'GREATER_ACCRA'
											e.region === 'WESTERN' ? e.total_ndc_presidential : null
										)} */}
								</p>
							</div>
							<div className=' flex flex-col'>
								<div style={{ width: '50px', height: '50px' }}>
									{/* {console.log('western==>', [
											western.total_ndc_presidential,
											western.total_npp_presidential,
											western.total_other_presidential,
										])} */}
									{/* {console.log('western==>', western)} */}
									<Pie
										data={{
											labels: [],
											datasets: [
												{
													label: '',
													// data: [10, 50, 60],
													data: northEast,
													backgroundColor: [
														'rgba(1, 100, 56, 1)',
														'rgba(4, 3, 110, 1)',
														'rgba(206, 212, 218, 1)',
													],
												},
											],
										}}
									/>
								</div>
							</div>
							<div className=' flex flex-col'>
								<p
									className='font-serif text-sm  mt-2 font-semibold tracking-wide text-npp'
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
									{northEast ? northEast[1] : '0'}
									{/* {regionalResult?.map((e) =>
											e.region === 'WESTERN' ? e.total_npp_presidential : null
										)} */}
								</p>
							</div>
						</div>
					</fieldset>
				</div>
			</div>
		</div>
	);
}
