import { classNames } from '@/shared/lib/classNames/classNames'
import { useUI } from '@/app/config/UIContext/useUI'

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
			{isUI ? (
				<div
					className={
						'h-full w-0 animate-infinite-loading shadow-[rgba(var(--background-start-rgb),0.4)_0px_30px_1000px_30vw]'
					}
				></div>
			) : (
				children
			)}
		</div>
	)
}
