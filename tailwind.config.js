export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframe: {
        down: {
          "0%": { top: "0" },
          "50%": { top: "20px" },
          "100%": { top: "50px" },
        },
      },
      animation: {
        down: "down 1s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated")
  ],
};

// Tailwind CSS Animated instalar
