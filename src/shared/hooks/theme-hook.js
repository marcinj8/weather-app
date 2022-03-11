import { useEffect, useState } from 'react';

export const useTheme = () => {
  const themes = {
    tropical: {
      color: 'white',
      colorSecondary:'orange',
      background:
        'linear-gradient(190deg, rgba(245,189,0,1) 0%, rgba(154,73,6,1) 70%)',
    },
    arctic: {
      color: 'white',
      colorSecondary:'blue',
      background:
        'linear-gradient(190deg, rgba(0,74,255,1) 0%, rgba(82,0,136,1) 70%)',
    },
    dark: {
      color: 'white',
      colorSecondary:'silver',
      background:
        'linear-gradient(190deg, rgba(150,157,172,1) 0%, rgba(92,84,117,1) 70%)',
    },
  };

  const [choosedTheme, setChoosedTheme] = useState('dark');
  const [isChoosed, setIsChoosed] = useState(false);

  const theme = themes[choosedTheme];

  const setTheme = (themeUpdated) => {
    setIsChoosed(true);
    setChoosedTheme(themeUpdated);
    localStorage.setItem('weatherAppTheme', themeUpdated);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('weatherAppTheme');
    if (storedTheme && !isChoosed) {
      setChoosedTheme(storedTheme);
      setIsChoosed(true);
    }
  }, [choosedTheme, isChoosed]);

  return { theme, themes, setTheme };
};
