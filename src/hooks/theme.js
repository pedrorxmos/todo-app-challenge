const root = document.querySelector(':root');

export const getSystemTheme = () => {
  const theme = (localStorage.getItem('theme')) ? localStorage.getItem('theme') : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  updateThemeMode(theme);
  return theme;
}

export const updateThemeMode = (theme) => {
  root.className = theme;
  localStorage.setItem('theme', theme);
}