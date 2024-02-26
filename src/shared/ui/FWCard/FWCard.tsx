import { classNames } from '@/shared/lib/classNames/classNames'
import { useUI } from '@/app/config/UIContext/useUI'

interface ICarouselCard {
	children: React.ReactNode
	className?: string
}

export function FWCard({ children, className }: ICarouselCard) {
	const { isUI } = useUI()
	return (
		<div
			className={classNames(
				`w-full bg-gray-100 text-center rounded-3xl`,
				{ ['UI']: isUI },
				[className]
			)}
		>
			{children}
		</div>
	)
}
