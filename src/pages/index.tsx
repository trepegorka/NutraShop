// pages/index.tsx
import 'tailwindcss/tailwind.css'
import React from 'react'
import { Text, TextType } from '@/shared/ui/Text/Text'
import { CarouselCard } from '@/widgets/CarouselCard/CarouselCard'
import { CardMenuButtons } from '@/widgets/CardMenuButtons/CardMenuButtons'
import { Logo } from '@/shared/ui/Logo/Logo'
import { FwhVideoCard } from '@/shared/ui/FWHVideoCard/FWHVideoCard'
import { Button, ButtonType } from '@/shared/ui/Button/Button'
import { AccordionCardHolder } from '@/widgets/AccordionCardHolder/AccordionCardHolder'

// Main page
const Home: React.FC = () => {
	return (
		<>
			<div className={'relative bg-amber-50 flex flex-col rounded-b-xl'}>
				{/*TODO: header*/}

				{/*TODO: sec1*/}
				<div className={'container px-3 mx-auto'}>
					<Logo className={'mb-3'} />
					<CarouselCard className={'mb-14'} />
					<div className={'flex mb-3'}>
						<Text textType={TextType.h1} className={'!text-4xl'}>
							Convenient, quality <br /> care{' '}
							<span className={`text-amber-800`}>100% online</span>
						</Text>
					</div>
					<div className={'flex'}>
						<Text className={'text-zinc-50 mb-10'} textType={TextType.p}>
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
				<div className={'container px-3 pb-10 mx-auto'}>
					<div className={'mb-3 md:w-1/2'}>
						<Text textType={TextType.h2} className={'!text-4xl'}>
							We’re making happy and healthy easy to achieve
						</Text>
					</div>
					<div className={'flex mb-10'}>
						<Button buttonType={ButtonType.primary}>
							<Text textType={TextType.span}> Explore treatments</Text>
						</Button>
					</div>
					<div className={'flex flex-col'}>
						<AccordionCardHolder />
					</div>
				</div>
			</div>

			{/*TODO: page separator*/}
			<div className={'h-8 bg-black -my-2'}></div>

			<div className={'bg-amber-50 rounded-t-xl overflow-x-auto'}>
				{/*TODO: sec4*/}
				<div className={'container px-3 pt-10 mx-auto'}>
					<div className={'mb-3 md:w-1/2'}>
						<Text textType={TextType.h2} className={'!text-4xl'}>
							We’re making happy and healthy easy to achieve
						</Text>
					</div>
				</div>
			</div>

			{/*TODO: sec5 - carousel with buttons*/}
			<div className={'bg-amber-50 flex overflow-x-auto'}>
				<div
					className={
						'container flex overflow-x-visible space-x-1 mx-auto relative'
					}
				>
					<div
						className={'flex bg-UI rounded-xl !min-w-[200px] aspect-square'}
					></div>
					<div
						className={'flex bg-UI rounded-xl !min-w-[200px] aspect-square'}
					></div>
					<div
						className={'flex bg-UI rounded-xl !min-w-[200px] aspect-square'}
					></div>
					<div
						className={'flex bg-UI rounded-xl !min-w-[200px] aspect-square'}
					></div>
					<div
						className={'flex bg-UI rounded-xl !min-w-[200px] aspect-square'}
					></div>
				</div>
			</div>

			<div className={'bg-amber-50 rounded-t-xl overflow-x-auto'}>
				{/*TODO: sec4*/}
				<div className={'container px-3 pt-10 mx-auto'}>
					<div className={'mb-3 md:w-1/2'}>
						<Text textType={TextType.h2} className={'!text-4xl'}>
							We’re making happy and healthy easy to achieve
						</Text>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
