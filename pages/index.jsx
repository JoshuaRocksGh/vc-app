import React from 'react';
import router from 'next/router';

export default function Home() {
	React.useEffect(() => {
		router.push('/login');
	}, []);
}
