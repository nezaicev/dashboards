/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js}", 'node_modules/flowbite-react/lib/esm/**/*.js',],
    theme: {
        container: {
            margin: {
                DEFAULT: '0',
                sm: '2rem',
                lg: '5rem',
                xl: '20rem',
                '2xl': '1rem',
            },
        },

        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('flowbite/plugin'),
    ],
}

