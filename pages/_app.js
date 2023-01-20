import '../styles/globals.css';

import { Work_Sans } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const work = Work_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
	return (
		<main className={work.className}>
			<Component {...pageProps} />
		</main>
	);
}
