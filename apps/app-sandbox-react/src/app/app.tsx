import {
  Button,
  ThemeProvider,
  Switch,
  useTheme,
} from '@ledgerhq/ldls-ui-react';

const ToggleThemeButton = () => {
  const { mode, toggleMode } = useTheme();
  return (
    <div className='text-muted flex flex-row gap-8'>
      Dark mode
      <Switch selected={mode === 'dark'} onChange={toggleMode} />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider mode='system'>
      <div className='bg-muted flex h-screen w-screen flex-col items-center justify-center'>
        <ToggleThemeButton />
        <div className='mt-32 flex flex-row gap-2'>
          <Button appearance='accent'>Button</Button>
          <Button appearance='base'>Button</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
