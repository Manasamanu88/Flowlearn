import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Primary Colors
				primary: {
					DEFAULT: '#1A365D', // Deep Navy Blue
					light: '#2A466D',
					dark: '#0A264D',
					foreground: '#FFFFFF',
					hover: '#0A264D',
					active: '#051B3D',
				},
				// Secondary Colors
				secondary: {
					DEFAULT: '#2D9CDB', // Electric Blue
					light: '#3DACEB',
					dark: '#1D8CCB',
					foreground: '#FFFFFF',
					hover: '#1D8CCB',
					active: '#0D7CBB',
				},
				// Accent Colors
				accent: {
					DEFAULT: '#48BFB6', // Soft Teal
					light: '#58CFC6',
					dark: '#38AFA6',
					foreground: '#FFFFFF',
					hover: '#38AFA6',
					active: '#289F96',
				},
				// Success Colors
				success: {
					DEFAULT: '#48BFB6', // Soft Teal
					light: '#58CFC6',
					dark: '#38AFA6',
					foreground: '#FFFFFF',
					hover: '#38AFA6',
					active: '#289F96',
				},
				// Warning Colors
				warning: {
					DEFAULT: '#F4B942', // Warm Yellow
					light: '#FFC952',
					dark: '#E4A932',
					foreground: '#1A365D',
					hover: '#E4A932',
					active: '#D49922',
				},
				// Error/Destructive Colors
				destructive: {
					DEFAULT: '#E53E3E', // Red
					light: '#F56565',
					dark: '#C53030',
					foreground: '#FFFFFF',
					hover: '#C53030',
					active: '#B51F1F',
				},
				// Background Colors
				background: {
					DEFAULT: '#F4F7FA', // Light Silver Gray
					foreground: '#1A365D',
					secondary: '#E8EDF2',
					tertiary: '#DCE3EA',
				},
				// Text Colors
				foreground: {
					DEFAULT: '#1A365D', // Deep Navy Blue
					secondary: '#4A5568', // Medium Gray
					muted: '#718096',
					subtle: '#A0AEC0',
				},
				// Border Colors
				border: {
					DEFAULT: '#E2E8F0',
					light: '#EDF2F7',
					dark: '#CBD5E0',
					primary: '#1A365D',
					secondary: '#2D9CDB',
					accent: '#48BFB6',
				},
				// Input Colors
				input: {
					DEFAULT: '#E2E8F0',
					focus: '#1A365D',
					error: '#E53E3E',
					success: '#48BFB6',
				},
				// Ring Colors
				ring: {
					DEFAULT: '#1A365D',
					error: '#E53E3E',
					success: '#48BFB6',
					warning: '#F4B942',
				},
				// Component-specific colors
				header: {
					DEFAULT: '#1A365D',
					foreground: '#FFFFFF',
				},
				footer: {
					DEFAULT: '#1A365D',
					foreground: '#F4F7FA',
				},
				sidebar: {
					DEFAULT: '#1A365D',
					foreground: '#F4F7FA',
					primary: '#2D9CDB',
					'primary-foreground': '#FFFFFF',
					accent: '#48BFB6',
					'accent-foreground': '#FFFFFF',
					border: '#2A466D',
					ring: '#2D9CDB',
				},
				// Card Colors
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#1A365D',
					border: '#E2E8F0',
					hover: '#F4F7FA',
				},
				// Gradient Colors
				gradient: {
					primary: 'linear-gradient(135deg, #1A365D 0%, #2D9CDB 100%)',
					secondary: 'linear-gradient(135deg, #2D9CDB 0%, #48BFB6 100%)',
					accent: 'linear-gradient(135deg, #48BFB6 0%, #F4B942 100%)',
				}
			},
			backgroundColor: {
				app: '#F4F7FA'
			},
			textColor: {
				default: '#1A365D',
				secondary: '#4A5568',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				baloo: ['"Baloo 2"', 'cursive'],
				inter: ['Inter', 'sans-serif'],
				nunito: ['Nunito', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
