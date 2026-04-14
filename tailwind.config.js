module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "576px",
      md: "768px",
      lg: "992px",
    },
    extend: {
      colors: {
        title: "#101828",
        titleDark: "#020617",
        text: "#475467",
        textLight: "#667085",
        body: "#f8fafc",
        surface: "#eef2f7",
        accent: "#111827",
        accentSoft: "#e2e8f0",
        border: "rgba(15, 23, 42, 0.1)",
        container: "rgba(255, 255, 255, 0.86)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        kai: ["Kaiti SC", "STKaiti", "KaiTi", "serif"],
      },
      boxShadow: {
        sm: "0 10px 30px rgba(15, 23, 42, 0.06)",
        md: "0 18px 45px rgba(15, 23, 42, 0.1)",
        header: "0 14px 32px rgba(15, 23, 42, 0.06)",
        floating: "0 16px 40px rgba(15, 23, 42, 0.14)",
        fab: "0 14px 28px rgba(15, 23, 42, 0.14)",
      },
      maxWidth: {
        site: "1120px",
      },
      zIndex: {
        tooltip: "10",
        fixed: "100",
        modal: "1000",
      },
      keyframes: {
        "profile-blob": {
          "0%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
        },
        pulse: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.15)",
          },
        },
      },
      animation: {
        "profile-blob": "profile-blob 8s ease-in-out infinite 1s",
        pulse: "pulse 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
