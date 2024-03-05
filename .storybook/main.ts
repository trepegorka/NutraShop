import type { StorybookConfig } from '@storybook/nextjs'
// @ts-ignore
import path from 'path'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'@storybook-addon-next',
		'@storybook/addon-viewport',
		'@storybook/addon-styling-webpack',
		{
			name: '@storybook/addon-styling-webpack',

			options: {
				rules: [
					{
						test: /\.css$/,
						sideEffects: true,
						use: [
							require.resolve('style-loader'),
							{
								loader: require.resolve('css-loader'),
								options: {
									importLoaders: 1
								}
							},
							{
								loader: require.resolve('postcss-loader'),
								options: {
									implementation: require.resolve('postcss')
								}
							}
						]
					}
				]
			}
		}
	],
	framework: {
		name: '@storybook/nextjs',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	webpackFinal: async (config, { configType }) => {
		if (!config.resolve) {
			return config
		}

		// Добавляем новое правило для обработки SCSS файлов
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				'style-loader', // Добавляет стили в DOM через тег <style>
				'css-loader', // Интерпретирует @import и url() как import/require() и разрешает их
				{
					loader: 'postcss-loader', // Добавляем postcss-loader для обработки Tailwind CSS и других PostCSS плагинов
					options: {
						postcssOptions: {
							ident: 'postcss',
							plugins: [
								require('tailwindcss'), // Указываем Tailwind CSS
								require('autoprefixer') // Добавляем Autoprefixer для автоматического добавления вендорных префиксов
							]
						}
					}
				},
				'sass-loader' // Компилирует SCSS в CSS
			],
			include: path.resolve(__dirname, '../src') // Указываем, где искать SCSS файлы
		})

		// Настройка алиасов
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname, '../src')
		}

		return config
	}
}
export default config
