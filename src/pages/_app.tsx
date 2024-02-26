import type { AppProps } from 'next/app'
import '@/app/styles/globals.scss'
import Head from 'next/head'
import { UiProvider } from '@/app/config/UIContext/UIProvider'
import { useUI } from '@/app/config/UIContext/useUI'
import { FC, useEffect } from 'react'

const UIChanger: FC = () => {
	const { isUI, setUI } = useUI()

	useEffect(() => {
		const spans = document.querySelectorAll('span')
		if (spans) {
			spans.forEach(span => {
				span.classList.toggle('text-transparent', isUI)
			})
		}
	}, [isUI])
	return (
		<button
			className={'text-white text-[0.7rem] p-1 m-1 border border-white'}
			onClick={setUI}
		>
			change UI mode
		</button>
	)
}
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UiProvider>
			<Head>
				<title>HIMS Clone</title>
				<meta name='description' content='Welcome, made by trepegorka.com' />
			</Head>
			<div className={'sticky top-0 z-10 bg-black'}>
				<UIChanger />
			</div>

			<Component {...pageProps} />
		</UiProvider>
	)
}

export default MyApp
