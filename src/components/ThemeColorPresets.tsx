import { useMemo } from 'react';
import { alpha, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
// @ts-ignore
import useSettings from '../hooks/useSettings';
// @ts-ignore
import componentsOverride from '../theme/overrides';

export default function ThemeColorPresets({ children }: any) {
  const defaultTheme: any = useTheme();
  const { setColor } = useSettings();

  const themeOptions = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        primary: setColor,
      },
      customShadows: {
        ...defaultTheme.customShadows,
        primary: `0 8px 16px 0 ${alpha(setColor.main, 0.24)}`,
      },
    }),
    [setColor, defaultTheme]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
