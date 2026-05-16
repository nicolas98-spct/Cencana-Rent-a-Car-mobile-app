export const theme = {
  colors: {
    background: '#F5F6F8',
    surface: '#FFFFFF',
    primary: '#C91B2B',
    secondary: '#123B2E',
    text: '#16181C',
    textMuted: '#6E7684',
    border: '#E4E8EE',
    success: '#1F8A4D',
    warning: '#D18A0F',
    danger: '#C91B2B',
    chipBg: '#F0F2F6'
  },
  spacing: { xs: 6, sm: 10, md: 16, lg: 24, xl: 32 },
  radii: { sm: 10, md: 16, lg: 24, pill: 999 },
  typography: {
    h1: { fontSize: 30, fontWeight: '700' as const },
    h2: { fontSize: 24, fontWeight: '700' as const },
    h3: { fontSize: 20, fontWeight: '600' as const },
    body: { fontSize: 15, fontWeight: '400' as const },
    caption: { fontSize: 13, fontWeight: '500' as const }
  },
  shadows: {
    card: {
      shadowColor: '#0A0A0A', shadowOpacity: 0.1, shadowRadius: 18, shadowOffset: { width: 0, height: 10 }, elevation: 4
    }
  }
};
