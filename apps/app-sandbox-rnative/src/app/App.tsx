import { Button } from '@ledgerhq/ldls-ui-rnative';
import { Plus } from '@ledgerhq/ldls-ui-rnative/symbols';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

export const App = () => {
  return (
    <SafeAreaView className='flex flex-1'>
      <StatusBar />
      <View className='size-44 bg-accent'>
        <Text>aze</Text>
      </View>
      <Button icon={Plus}>Button</Button>
    </SafeAreaView>
  );
};

export default App;
