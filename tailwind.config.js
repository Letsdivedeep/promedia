/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1d4ed8",
          secondary: "#0284c7",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#10b981",
          warning: "#FBBD23",
          error: "#f43f5e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
