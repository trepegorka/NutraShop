import React from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useUI } from '@/app/config/UIContext/useUI'

export enum TextType {
	h1 = 'text-7xl font-normal text-gray-800',
	h2 = 'text-6xl font-normal text-gray-800',
	h3 = 'text-5xl font-normal text-gray-800',
	h4 = 'text-4xl font-normal text-gray-800',
	h5 = 'text-3xl font-normal text-gray-800',
	h6 = 'text-2xl font-normal text-gray-800',
	p = 'text-lg font-medium text-gray-800',
	div = 'text-gray-800',
	span = ''
}

interface IText {
	children: React.ReactNode
	textType: TextType
	className?: string
}

export function Text({ children, textType, className }: IText) {
	const { isUI } = useUI()

	const tailwindClasses = textType
	const indexOfClasses = Object.values(TextType).indexOf(
		tailwindClasses as unknown as TextType
	)
	const key = Object.keys(TextType)[indexOfClasses]
	const Component = key as keyof JSX.IntrinsicElements

	return (
		<Component
			className={classNames(
				tailwindClasses,
				{
					['bg-gray-200 !text-transparent rounded-[2rem]']: isUI
				},
				[className]
			)}
		>
			{children}
		</Component>
	)
}
