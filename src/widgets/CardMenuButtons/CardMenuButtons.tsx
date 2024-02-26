import { Button, ButtonType } from '@/shared/ui/Button/Button'
import { Text, TextType } from '@/shared/ui/Text/Text'

interface ICardMenuButtons {
	className?: string
}

export function CardMenuButtons({ className }: ICardMenuButtons) {
	const cardData = [
		{ mainText: 'Have great', highlightText: 'sex', color: 'text-cyan-500' },
		{ mainText: 'Regrow', highlightText: 'hair', color: 'text-amber-800' },
		{ mainText: 'Lose', highlightText: 'weight', color: 'text-amber-600' },
		{ mainText: 'Tackle', highlightText: 'anxiety', color: 'text-green-700' },
		{ mainText: 'Have longer', highlightText: 'sex', color: 'text-purple-600' },
		{ mainText: 'Get smooth', highlightText: 'skin', color: 'text-amber-500' }
	]
	return (
		<div className={`grid md:grid-cols-3 gap-x-3 gap-y-3 ${className}`}>
			{cardData.map(({ mainText, highlightText, color }, index) => (
				<Button buttonType={ButtonType.cardButton} key={index}>
					<Text textType={TextType.div} className={'text-2xl font-medium'}>
						{mainText} <span className={color}>{highlightText}</span>
					</Text>
				</Button>
			))}
		</div>
	)
}
