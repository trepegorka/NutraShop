import { classNames } from '@/shared/lib/classNames/classNames'
import { useUI } from '@/app/config/UIContext/useUI'

interface ILogo {
	className?: string
}

export function Logo({ className }: ILogo) {
	const { isUI } = useUI()
	return (
		<div className={'flex'}>
			<div
				className={classNames(
					`flex font-black text-4xl p-1`,
					{ ['UI']: isUI },
					[className]
				)}
			>
				logo
			</div>
		</div>
	)
}
