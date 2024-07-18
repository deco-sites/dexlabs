import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "s1660": "1660px",
    },
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
        slidingFast: "slidingFast 20s linear infinite",
        "fade-in": "fade-in 0.5s ease-in-out",
        "pop-up": "pop-up 0.5s ease-in-out",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slidingFast: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "pop-up": {
          "0%": { transform: "scale(90%)" },
          "100%": { transform: "scale(100%)" },
        },
      },
      boxShadow: {
        "custom-box": "0px 4px 4px 0px rgba(0, 0, 0, 0.4)",
        "soft-shadow": "0px 2px 4px 0px #0000001A",
        "spreaded-softshadow": "0px 2px 12px 0px #14142B14",
      },
      borderColor: {
        "custom-box": "#E9ECF5",
      },
      fontSize: {
        "28": "1.75rem", // 28px
        "40": "2.5rem", // 40px
      },
    },
  },
};
