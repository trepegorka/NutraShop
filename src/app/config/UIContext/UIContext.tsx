import { createContext } from 'react'

interface isUItype {
	isUI: boolean
	toggleUI: () => void
}
export const UIcontext = createContext<isUItype>({
	isUI: false,
	toggleUI: () => {}
})
