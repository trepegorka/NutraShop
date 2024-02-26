import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},

			colors: {
				...colors,
				UI: 'white'
			},

			fontWeight: {
				extralight: '200',
				light: '300',
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				black: '900'
			},
			animation: {
				['infinite-slider']: 'infiniteSlider 60s linear infinite',
				['infinite-loading']: 'infinityLoading 3s linear infinite'
			},
			keyframes: {
				infiniteSlider: {
					'0%': { transform: 'translateX(0)' },
					'100%': {
						transform: 'translateX(calc(-310px * 5))'
					}
				},
				infinityLoading: {
					'0%': { transform: 'translateX(-100vw)' },
					'100%': {
						transform: 'translateX(200vw)'
					}
				}
			}
		}
	},
	plugins: []
}
export default config
