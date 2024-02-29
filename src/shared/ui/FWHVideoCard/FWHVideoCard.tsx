import { classNames } from '@/shared/lib/classNames/classNames'
import { useUI } from '@/app/config/UIContext/useUI'
import { CardLoader } from '@/shared/ui/CardLoader/CardLoader'

interface IFwhVideoCard {
	children?: React.ReactNode
	className?: string
}

export function FwhVideoCard({ children, className }: IFwhVideoCard) {
	const { isUI } = useUI()
	return (
		<div
			className={classNames(
				'w-full aspect-video max-h-screen object-cover overflow-hidden',
				{ ['UI']: isUI },
				[className]
			)}
		>
			{isUI ? <CardLoader /> : children}
		</div>
	)
}
