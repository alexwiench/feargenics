import '../styles/globals.css';

import { Rubik } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const rubik = Rubik({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
