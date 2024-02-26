import React from 'react'
import { Text, TextType } from '@/shared/ui/Text/Text'
import { FWCard } from '@/shared/ui/FWCard/FWCard'

interface ICarouselCard {
	className?: string
}

export function CarouselCard({ className }: ICarouselCard) {
	const CarouselText: Record<string, string> = {
		'Free shipping for all prescriptions': 'text-amber-800', // коричневый
		'No insurance required': 'text-indigo-700', // голубой
		'Discreet packaging and direct delivery': 'text-indigo-400', // фиолетовый
		'6 million online visits and counting*': 'text-purple-400', // индиго
		'Loved and trusted by over 1 million subscribers': 'text-emerald-300' // мятный
	}

	return (
		<FWCard
			className={`${className} flex justify-items-center items-center overflow-hidden relative`}
		>
			<div className='flex animate-infinite-slider hover:animation-play-state-paused'>
				{Object.entries(CarouselText).map(([text, colorClass], index) => (
					<Text
						key={index}
						className={`whitespace-nowrap mr-5 my-6 ${colorClass}`}
						textType={TextType.span}
					>
						{text}
					</Text>
				))}
				{Object.entries(CarouselText).map(([text, colorClass], index) => (
					<Text
						key={`copy-${index}`}
						className={`whitespace-nowrap mr-5 my-6 ${colorClass}`}
						textType={TextType.span}
					>
						{text}
					</Text>
				))}
			</div>
		</FWCard>
	)
}
