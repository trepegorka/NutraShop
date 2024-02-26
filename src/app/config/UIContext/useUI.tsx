import React, { useContext } from 'react'
import { UIcontext } from '@/app/config/UIContext/UIContext'

interface useUIResult {
	isUI: boolean
	setUI: () => void
}

export function useUI(): useUIResult {
	const { isUI, toggleUI } = useContext(UIcontext)

	const setUI = () => {
		toggleUI()
	}

	return {
		isUI,
		setUI
	}
}
