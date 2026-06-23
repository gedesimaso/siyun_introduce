export default {
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'surface-bright': '#fcf8fb',
				'surface-container-low': '#f6f3f5',
				outline: '#727784',
				'surface-container-high': '#eae7ea',
				'on-primary-fixed-variant': '#00458e',
				'inverse-surface': '#303032',
				'on-primary-container': '#dfe8ff',
				'on-secondary': '#ffffff',
				'inverse-on-surface': '#f3f0f2',
				'on-tertiary-fixed-variant': '#793000',
				'primary-container': '#0066cc',
				'tertiary-fixed-dim': '#ffb692',
				'on-error': '#ffffff',
				'tertiary-fixed': '#ffdbcb',
				'on-surface-variant': '#414753',
				'secondary-fixed-dim': '#a3c9ff',
				primary: '#004e9f',
				'tertiary-container': '#af4900',
				'canvas-light': '#ffffff',
				background: '#fcf8fb',
				error: '#ba1a1a',
				'outline-variant': '#c1c6d5',
				'surface-tint': '#005cba',
				'surface-container': '#f0edef',
				'on-tertiary': '#ffffff',
				'surface-container-highest': '#e4e2e4',
				'on-secondary-fixed-variant': '#004882',
				'inverse-primary': '#aac7ff',
				'surface-pearl': '#fafafc',
				surface: '#fcf8fb',
				tertiary: '#883700',
				'secondary-fixed': '#d3e3ff',
				'surface-dark-2': '#2a2a2c',
				'primary-fixed-dim': '#aac7ff',
				'surface-black': '#000000',
				'surface-dark-1': '#272729',
				'primary-fixed': '#d7e3ff',
				'surface-container-lowest': '#ffffff',
				'on-tertiary-container': '#ffe3d6',
				'on-secondary-container': '#002d55',
				'on-surface': '#1b1b1d',
				'secondary-container': '#2696fe',
				'on-secondary-fixed': '#001c39',
				'on-background': '#1b1b1d',
				'on-tertiary-fixed': '#341100',
				secondary: '#0060aa',
				'error-container': '#ffdad6',
				'on-primary-fixed': '#001b3e',
				'on-primary': '#ffffff',
				'canvas-parchment': '#f5f5f7',
				hairline: '#e0e0e0',
				'on-error-container': '#93000a',
				'ink-muted': '#7a7a7a',
				'surface-dim': '#dcd9dc',
				'surface-variant': '#e4e2e4',
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				xl: 'calc(var(--radius) + 4px)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			spacing: {
				lg: '32px',
				measure: '38rem',
				xs: '8px',
				md: '24px',
				gutter: '22px',
				'content-max': '1120px',
				'hero-v': '120px',
				sm: '16px',
				'section-v': '80px'
			},
			fontFamily: {
				'hero-display': ['Pretendard'],
				'hero-display-mobile': ['Pretendard'],
				'body-strong': ['Pretendard'],
				'display-md': ['Pretendard'],
				eyebrow: ['JetBrains Mono'],
				caption: ['Pretendard'],
				'display-lg': ['Pretendard'],
				body: ['Pretendard'],
				lead: ['Pretendard'],
				'fine-print': ['Pretendard'],
				'lead-airy': ['Pretendard']
			},
			fontSize: {
				'hero-display': ['56px', { lineHeight: '1.07', letterSpacing: '-0.005em', fontWeight: '600' }],
				'hero-display-mobile': ['34px', { lineHeight: '1.1', letterSpacing: '-0.005em', fontWeight: '600' }],
				'body-strong': ['17px', { lineHeight: '1.5', letterSpacing: '-0.011em', fontWeight: '600' }],
				'display-md': ['34px', { lineHeight: '1.47', letterSpacing: '-0.011em', fontWeight: '600' }],
				eyebrow: ['12px', { lineHeight: '1.0', letterSpacing: '0.14em', fontWeight: '500' }],
				caption: ['14px', { lineHeight: '1.45', letterSpacing: '-0.006em', fontWeight: '400' }],
				'display-lg': ['40px', { lineHeight: '1.1', letterSpacing: '0', fontWeight: '600' }],
				body: ['17px', { lineHeight: '1.7', letterSpacing: '-0.011em', fontWeight: '400' }],
				lead: ['24px', { lineHeight: '1.36', letterSpacing: '0.006em', fontWeight: '400' }],
				'fine-print': ['12px', { lineHeight: '1.3', letterSpacing: '-0.003em', fontWeight: '400' }],
				'lead-airy': ['24px', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '300' }]
			}
		}
	}
};
