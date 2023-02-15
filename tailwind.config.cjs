/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["Inter", "sans-serif"],
            },
            colors: {},

            boxShadow: {
                card: "0px 34px 3px rgba(0, 0, 0, 0.86)",
                toggle:
                    "0px 1px 3px rgba(0, 0, 0, 0.1) 0px 1px 2px rgba(0, 0, 0, 0.06)",
            },
        },
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
