import { Text, TextType } from '@/shared/ui/Text/Text'
import React from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useUI } from '@/app/config/UIContext/useUI'
import cls from './AccordionCardHolder.module.scss'

interface IAccordionCard {
	className?: string
}

const AccordionCard = [
	{
		title: (
			<>
				Innovative <br /> Treatments
			</>
		),
		image: '',
		text: 'Proven medications and personalized treatments formulated just for you'
	},
	{
		title: (
			<>
				Ogo <br /> Treatments
			</>
		),
		image: '',
		text: 'Proven medications and personalized treatments formulated just for you'
	},
	{
		title: (
			<>
				Pok <br /> Treatments
			</>
		),
		image: '',
		text: 'Proven medications and personalized treatments formulated just for you'
	},
	{
		title: (
			<>
				Pok <br /> Treatments
			</>
		),
		image: '',
		text: 'Proven medications and personalized treatments formulated just for you'
	}
]
export function AccordionCardHolder({ className }: IAccordionCard) {
	const { isUI } = useUI()
	return (
		<ul className={classNames(`${cls.ul} space-y-3`, {}, [className])}>
			{AccordionCard.map((item, index) => {
				return (
					<li key={index} className={classNames('', { ['UI']: isUI }, [])}>
						<div className={'p-3 pl-8'}>
							<div className={'flex flex-nowrap mb-10'}>
								<div className={'flex'}>
									<Text textType={TextType.h3} className={'text-[1.7rem]'}>
										{item.title}
									</Text>
								</div>
								<div className={'h-full'}>{item.image}</div>
							</div>
							<div className={'flex'}>
								<Text textType={TextType.p} className={'text-sm'}>
									{item.text}
								</Text>
							</div>
						</div>
					</li>
				)
			})}
		</ul>
	)
}
