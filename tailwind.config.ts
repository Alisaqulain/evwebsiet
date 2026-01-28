import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Logo-based theme colors - matching Royal Metro logo
        'dark-green': '#1a5f3f',      // Dark green for crown, bamboo stalk, "Royal Metro" text
        'light-green': '#4ade80',     // Light green for bamboo leaves
        'light-blue': '#3b82f6',      // Bright blue for EV superscript
        'royal-green': '#1a5f3f',     // Alias for dark green
        'electric-blue': '#3b82f6',   // Alias for bright blue
        'bamboo-green': '#4ade80',    // Alias for light green
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #f1f5f9 50%, #e2e8f0 75%, #ffffff 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 25%, #dcfce7 50%, #f0fdf4 75%, #ffffff 100%)',
        'logo-gradient': 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 25%, #dcfce7 50%, #dbeafe 75%, #ffffff 100%)',
        'hero-gradient': 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 50%, #ffffff 100%)',
      },
    },
  },
  plugins: [],
}
export default config

