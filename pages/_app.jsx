import '@mantine/core/styles.css';

import '../styles/globals.css';
import { createTheme, MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }) {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Component {...pageProps} />{' '}
		</MantineProvider>
	);
}

export default MyApp;
