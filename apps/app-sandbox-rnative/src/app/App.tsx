import { Button, Switch } from '@ledgerhq/ldls-ui-rnative';
import { Plus, Settings } from '@ledgerhq/ldls-ui-rnative/symbols';
import { useRef } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}
        >
          <View style={styles.section}>
            <Switch testID='switch' aria-valuetext='custom' />
            <Text testID='heading' role='heading' className='mb-24 uppercase'>
              Welcome to React Native 👋
            </Text>
            <Button
              appearance='accent'
              onPress={() => {
                console.log('Button pressed');
              }}
            >
              Click me
            </Button>
            <View className='mt-12 w-full flex-row items-center gap-8'>
              <Button appearance='accent'>Text Only</Button>
              <Button appearance='accent' icon={Plus}>
                With Icon
              </Button>
              <Button appearance='accent' icon={Settings} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  section: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
});

export default App;
