import {
  Button,
  ThemeProvider,
  Switch,
  useThemeState,
} from '@ledgerhq/ldls-ui-react';

export function App() {
  const { theme, toggleTheme } = useThemeState();

  return (
    <ThemeProvider theme={theme}>
      <div className='bg-muted flex h-screen w-screen flex-col items-center justify-center'>
        <div className='text-muted flex flex-row gap-8'>
          Dark mode
          <Switch selected={theme === 'dark'} onChange={toggleTheme} />
        </div>
        <div className='mt-32 flex flex-row gap-2'>
          <Button appearance='accent'>Button</Button>
          <Button appearance='base'>Button</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
