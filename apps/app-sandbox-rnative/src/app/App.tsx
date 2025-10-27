import { Button, IconButton, Switch } from '@ledgerhq/ldls-ui-rnative';
import {
  ExternalLink,
  Link,
  Plus,
  Settings,
} from '@ledgerhq/ldls-ui-rnative/symbols';
import { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
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
              <IconButton
                accessibilityLabel='Settings'
                appearance='accent'
                icon={Settings}
              />
            </View>
            <View className='my-12 gap-8'>
              <Text>IconButton</Text>
              <View className='flex-row gap-8'>
                <IconButton
                  accessibilityLabel='Go to Ledger Shop'
                  appearance='accent'
                  icon={ExternalLink}
                />
                <IconButton
                  accessibilityLabel='Go to Ledger Shop'
                  appearance='accent'
                  icon={Settings}
                  loading
                />
                <IconButton
                  accessibilityLabel='Go to Ledger Shop'
                  appearance='base'
                  icon={Link}
                />
                <IconButton
                  accessibilityLabel='Go to Ledger Shop'
                  appearance='red'
                  icon={Settings}
                />
                <IconButton
                  accessibilityLabel='Go to Ledger Shop'
                  appearance='gray'
                  icon={Settings}
                />
                <IconButton
                  accessibilityLabel='Go to Ledger Shop'
                  icon={Settings}
                />
                <IconButton
                  accessibilityLabel='Go to Ledger Shop'
                  icon={Settings}
                  disabled
                />
              </View>
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
