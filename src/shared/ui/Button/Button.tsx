import { classNames } from '@/shared/lib/classNames/classNames'
import { useUI } from '@/app/config/UIContext/useUI'

export enum ButtonType {
	cardButton = 'flex border border-slate-200 px-3 py-7 rounded-2xl hover:border-black hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105',
	primary = 'bg-black text-white py-3 px-7',
	secondary = 'bg-white text-black'
}
interface ICardButton {
	children: React.ReactNode
	className?: string
	buttonType: ButtonType
}

export function Button({ children, className, buttonType }: ICardButton) {
	const { isUI } = useUI()
	return (
		<a
			className={classNames(`cursor-pointer ${buttonType}`, { ['UI']: isUI }, [
				className
			])}
		>
			{children}
		</a>
	)
}
