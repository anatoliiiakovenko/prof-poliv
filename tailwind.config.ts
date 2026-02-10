import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                bg: 'rgb(var(--bg))',
                text: 'rgb(var(--text))',
                primary: 'rgb(var(--primary))',
            },
        },
    },
    plugins: [],
}

export default config
