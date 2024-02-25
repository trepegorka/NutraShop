// pages/index.tsx
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

const Home: React.FC = () => {
	return (
		<>
			<Head>
				<title>Welcome to My Next.js Page</title>
				<meta
					name='description'
					content='Welcome to my Next.js page with TypeScript and Tailwind CSS'
				/>
			</Head>
			<div className={'flex justify-center items-center h-screen'}>
				<h1 className='text-5xl font-bold'>Welcome to My Next.js Page!</h1>
			</div>
		</>
	)
}

export default Home
