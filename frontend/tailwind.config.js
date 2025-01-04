/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Named Colors
        primary: {
          DEFAULT: "#4F91C5", // Light Blue
          hover: "#3A7BA0",   // Deeper Blue Hover
        },
        secondary: {
          DEFAULT: "#6C757D", // Cool Gray
          hover: "#5A636E",   // Darker Cool Gray Hover
        },
        accent: {
          DEFAULT: "#F96E2A", // Soft Sky Blue
          hover: "#88AED4",   // Richer Sky Blue Hover
        },
        background: {
          light: "#F8FAFC",   // Subtle Off-White
          dark: "#2C3E50",    // Deep Charcoal
        },
        border: {
          DEFAULT: "#E0E6ED", // Pale Gray for Borders
        },
        text: {
          primary: "#2E3A45", // Dark Gray for Text
          secondary: "#6C757D", // Muted Cool Gray for Secondary Text
        },
        feedback: {
          success: "#38A169", // Fresh Green for Success
          error: "#E53E3E",   // Rich Red for Errors
          warning: "#F6AD55", // Muted Orange for Warnings
          info: "#3182CE",    // Bold Blue for Info
        },
      },
    },
  },
  plugins: [],
};
