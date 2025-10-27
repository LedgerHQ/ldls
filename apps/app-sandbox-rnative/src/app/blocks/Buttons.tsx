import { Button } from '@ledgerhq/ldls-ui-rnative';
import { Plus } from '@ledgerhq/ldls-ui-rnative/symbols';

export const Buttons = () => {
  return (
    <>
      <Button
        appearance='base'
        onPress={() => {
          console.log('Button pressed');
        }}
      >
        Base
      </Button>
      <Button
        appearance='accent'
        onPress={() => {
          console.log('Button pressed');
        }}
      >
        Accent
      </Button>
      <Button
        icon={Plus}
        appearance='accent'
        onPress={() => {
          console.log('Button pressed');
        }}
      >
        With Icon
      </Button>
    </>
  );
};
