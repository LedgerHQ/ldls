import { useRef } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Button, Switch } from '@ledgerhq/ldls-ui-rnative';

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

let AppEntryPoint = App;

// Toggle Storybook via global flag set by start scripts
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (true) {
  AppEntryPoint = require('../../.rnstorybook').default;
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  section: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
});

export default AppEntryPoint;
