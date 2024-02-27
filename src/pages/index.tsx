// pages/index.tsx
import 'tailwindcss/tailwind.css'
import React from 'react'
import { Text, TextType } from '@/shared/ui/Text/Text'
import { CarouselCard } from '@/widgets/CarouselCard/CarouselCard'
import { CardMenuButtons } from '@/widgets/CardMenuButtons/CardMenuButtons'
import { Logo } from '@/shared/ui/Logo/Logo'
import { FwhVideoCard } from '@/shared/ui/FWHVideoCard/FWHVideoCard'
import { Button, ButtonType } from '@/shared/ui/Button/Button'

// Main page
const Home: React.FC = () => {
	return (
		<div className={'flex flex-col'}>
			<div className={'container px-3 mx-auto'}>
				{/*TODO: header*/}
				<Logo className={'mb-3'} />

				{/*TODO: sec1*/}
				<CarouselCard className={'mb-14'} />

				<div className={'flex mb-3'}>
					<Text textType={TextType.h1} className={'!text-4xl'}>
						Convenient, quality <br /> care{' '}
						<span className={`text-amber-800`}>100% online</span>
					</Text>
				</div>

				<div className={'flex'}>
					<Text className={'text-zinc-500 mb-10'} textType={TextType.p}>
						How can we help you?
					</Text>
				</div>

				<CardMenuButtons className={'mb-10'} />
			</div>

			{/*TODO: sec2 !?*/}
			<div className={'flex'}>
				<FwhVideoCard className={'mb-10'} />
			</div>

			{/*TODO: sec3*/}
			<div className={'container flex flex-col px-3 mx-auto'}>
				<div className={'flex mb-3 md:w-1/2'}>
					<Text textType={TextType.h2} className={'!text-4xl'}>
						We’re making happy and healthy easy to achieve
					</Text>
				</div>
				<div className={'flex'}>
					<Button buttonType={ButtonType.primary}>Explore treatments</Button>
				</div>
			</div>
		</div>
	)
}

export default Home
