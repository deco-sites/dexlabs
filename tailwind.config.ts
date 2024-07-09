import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
        slidingFast: "slidingFast 20s linear infinite",
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
      },
      boxShadow: {
        "custom-box": "0px 4px 4px 0px rgba(0, 0, 0, 0.4)",
        "soft-shadow": "0px 2px 4px 0px #0000001A",
      },
      borderColor: {
        "custom-box": "#E9ECF5",
      },
    },
  },
};
