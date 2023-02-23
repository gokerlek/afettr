/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["Inter", "sans-serif"],
            },
            screens: {
                axl: { max: "1200px", min: "1001px" },
                al: { max: "1000px", min: "801px" },
                am: { max: "800px", min: "501px" },
                as: { max: "500px", min: "0px" },
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
