import React from 'react';
import Navbar from '../../../components/snippets/NavBar';
import LinksTab from '../../../components/snippets/LinksTab';
import Link from 'next/link';
import Image from 'next/image';
import { RingProgress } from '@mantine/core';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import revenueData from '../../../src/data/revenueData.json';

export default function AblekumaCentral() {
	return (
		<>
			<Navbar />
			<LinksTab />
			<div className=' flex flex-row p-2 m-1'>
				<div className='basis-1/2'>
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
				<div className='basis-1/2'>
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
							Parliamentry
						</legend>
						<br />
						<Line
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
								// plugins: {
								// 	title: {
								// 		text: 'Monthly Revenue & Cost',
								// 	},
								// },
							}}
						/>
					</fieldset>
				</div>
			</div>
		</>
	);
}
