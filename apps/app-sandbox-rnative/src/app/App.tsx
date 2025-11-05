import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { UnistylesDemo } from './UnistylesDemo';

export const App = () => {
  return (
    <SafeAreaView className='flex flex-1'>
      <StatusBar />
      <ScrollView>
        <UnistylesDemo />

        <View className='size-44 bg-accent'>
          <Text>aze</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
