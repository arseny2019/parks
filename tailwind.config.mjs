/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            'sm': '375px',
            // => @media (min-width: 600px) { ... }

            'md': '601px',
            // => @media (min-width: 768px) { ... }

            'lg': '769px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1025px',
            // => @media (min-width: 1200px) { ... }

            '2xl': '1201px',
            // => @media (min-width: 1680px) { ... }
        },
        extend: {
            fontFamily: {
                roboto: ['var(--font-roboto)'],
                inter: ['var(--font-inter)'],
                'roboto-condensed': ['var(--font-roboto-condensed)'],
            },
            colors: {
                'main-black': '#0A0A0A',
                'secondary-black': 'rgba(10, 10, 10, 0.8)',
                'secondary-white': 'rgba(255, 255, 255, 0.8)',
                'placeholder-black': 'rgba(10, 10, 10, 0.4)',
                'placeholder-white': 'rgba(255, 255, 255, 0.4)',
            },
        },
    },
    plugins: [],
};
