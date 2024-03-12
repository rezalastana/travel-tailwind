/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                taprom: ["Taprom", "sans-serif"],
            },
            colors: {
                orange: "#FF4900",
                orange2: "#FF5E1D",
                hitam: "#242424",
                hitam2: "#7c7c7c",
                putih: "#f0f0f0",
            },
        },
    },
    plugins: [],
};
