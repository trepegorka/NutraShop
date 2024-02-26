import { useMemo, useState } from 'react'
import { UIcontext } from '@/app/config/UIContext/UIContext'

interface IUiProvider {
	children: React.ReactNode
}

export function UiProvider({ children }: IUiProvider) {
	const [isUI, setIsUI] = useState<boolean>(false)

	const toggleUI = () => setIsUI(!isUI)

	const contextValue = useMemo(
		() => ({
			isUI,
			toggleUI
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[isUI]
	)

	return (
		<UIcontext.Provider value={contextValue}>{children}</UIcontext.Provider>
	)
}
