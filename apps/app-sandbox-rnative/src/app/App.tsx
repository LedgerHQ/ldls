import { Button } from '@ledgerhq/ldls-ui-rnative';
import { Plus } from '@ledgerhq/ldls-ui-rnative/symbols';
import { SafeAreaView, StatusBar } from 'react-native';

export const App = () => {
  return (
    <SafeAreaView className='flex flex-1'>
      <StatusBar />
      <Button icon={Plus}>Button</Button>
    </SafeAreaView>
  );
};

export default App;
