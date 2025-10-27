import { Switch } from '@ledgerhq/ldls-ui-rnative';

export const Switches = () => {
  return (
    <>
      <Switch aria-valuetext='custom' />
      <Switch aria-valuetext='custom' defaultChecked />
      <Switch aria-valuetext='custom' disabled />
      <Switch aria-valuetext='custom' defaultChecked disabled />
    </>
  );
};
