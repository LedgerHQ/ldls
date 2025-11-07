import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text, View } from 'react-native';
import { Button } from '../Button';
import { BottomSheet } from './BottomSheet';
import { BottomSheetHeader } from './BottomSheetHeader';
import {
  BottomSheetFlatList,
  BottomSheetScrollView,
  BottomSheetView,
  BottomSheetVirtualizedList,
} from './Scrollables';
import { useBottomSheetRef } from './useBottomSheetRef';

const meta = {
  component: BottomSheet,
  subcomponents: { BottomSheetHeader },
  title: 'Containment/BottomSheet',
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        format: true,
        type: 'code',
      },
    },
  },
  argTypes: {
    snapPoints: {
      control: 'select',
      options: [
        undefined,
        'full',
        'medium',
        'small',
        '[150, 300]',
        '["25%", "50%"]',
      ],
      mapping: {
        undefined: undefined,
        full: 'full',
        medium: 'medium',
        small: 'small',
        '[150, 300]': [150, 300],
        '["25%", "50%"]': ['25%', '50%'],
      },
    },
    onBack: {
      control: 'select',
      options: ['() => {}', 'undefined'],
      mapping: {
        '() => {}': () => {
          return null;
        },
        undefined: undefined,
      },
    },
    onClose: {
      control: 'select',
      options: ['() => {}', 'undefined'],
      mapping: {
        '() => {}': () => {
          return null;
        },
        undefined: undefined,
      },
    },
    backdropPressBehavior: {
      control: 'select',
      options: ['none', 'close', 'collapse', 1],
      mapping: {
        none: 'none',
        close: 'close',
        collapse: 'collapse',
        1: 1,
      },
    },
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Base: Story = {
  args: {
    snapPoints: 'full',
    hideCloseButton: false,
    onBack: undefined,
    onClose: undefined,
    enableHandlePanningGesture: true,
    enablePanDownToClose: true,
    enableBlurKeyboardOnGesture: true,
    enableDynamicSizing: false,
    detached: false,
    backdropPressBehavior: 'close',
  },
  render: (args) => {
    const bottomSheetRef = useBottomSheetRef();

    return (
      <View className='h-320 w-full items-center justify-center pt-32'>
        <Button size='xs' onPress={() => bottomSheetRef.current?.expand()}>
          Toggle open
        </Button>
        <BottomSheet {...args} ref={bottomSheetRef}>
          <BottomSheetView>
            <BottomSheetHeader
              title='Title'
              appearance='compact'
              description='Description'
            />
            <View className='flex flex-col gap-12'>
              {Array.from({ length: 3 }).map((_, index) => (
                <Text className='text-base' key={index}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae excepturi odit, quis tenetur iste perspiciatis mollitia
                  porro velit laborum quasi numquam reiciendis dolor! Et quia
                  voluptates eum, sunt asperiores quod.
                </Text>
              ))}
            </View>
          </BottomSheetView>
        </BottomSheet>
      </View>
    );
  },
};

export const TitleExpanded: Story = {
  args: {
    snapPoints: 'full',
    hideCloseButton: false,
    enableHandlePanningGesture: true,
    enablePanDownToClose: true,
    enableBlurKeyboardOnGesture: true,
    enableDynamicSizing: false,
    detached: false,
  },
  render: (args) => {
    const bottomSheetRef = useBottomSheetRef();

    return (
      <View className='h-320 w-full items-center justify-center pt-32'>
        <Button size='xs' onPress={() => bottomSheetRef.current?.expand()}>
          Toggle open
        </Button>
        <BottomSheet {...args} ref={bottomSheetRef}>
          <BottomSheetView>
            <BottomSheetHeader
              title='Expanded title'
              appearance='expanded'
              description='Expanded description.'
            />
            <View className='flex flex-col gap-12'>
              <Text className='text-base body-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                excepturi odit, quis tenetur iste perspiciatis mollitia porro
                velit laborum quasi numquam reiciendis dolor! Maecenas sed diam
                eget risus varius blandit sit amet non magna. Donec ullamcorper
                nulla non metus auctor fringilla. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec ullamcorper nulla non metus
                auctor fringilla.
              </Text>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </View>
    );
  },
};

export const DynamicSizing: Story = {
  args: {
    hideCloseButton: false,
    enableHandlePanningGesture: true,
    enablePanDownToClose: true,
    enableBlurKeyboardOnGesture: true,
    enableDynamicSizing: true,
    detached: false,
  },
  render: (args) => {
    const bottomSheetRef = useBottomSheetRef();

    return (
      <View className='h-320 w-full items-center justify-center'>
        <Button size='xs' onPress={() => bottomSheetRef.current?.expand()}>
          Toggle open
        </Button>
        <BottomSheet {...args} ref={bottomSheetRef}>
          <BottomSheetView>
            <BottomSheetHeader
              title='Dynamic Sizing'
              appearance='compact'
              description='This bottom sheet adapts to its content height'
            />
            <View className='flex flex-col gap-12'>
              {Array.from({ length: 40 }).map((_, index) => (
                <Text className='text-base' key={index}>
                  Item {index + 1}: Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit.
                </Text>
              ))}
            </View>
          </BottomSheetView>
        </BottomSheet>
      </View>
    );
  },
};

export const DynamicSizingAndMaxSize: Story = {
  args: {
    snapPoints: undefined,
    hideCloseButton: false,
    enableHandlePanningGesture: true,
    enablePanDownToClose: true,
    enableBlurKeyboardOnGesture: true,
    enableDynamicSizing: true,
    maxDynamicContentSize: 250,
    detached: false,
  },
  render: (args) => {
    const bottomSheetRef = useBottomSheetRef();

    return (
      <View className='h-320 w-full items-center justify-center pt-32'>
        <Button size='xs' onPress={() => bottomSheetRef.current?.expand()}>
          Toggle open
        </Button>
        <BottomSheet {...args} ref={bottomSheetRef}>
          <BottomSheetScrollView>
            <BottomSheetHeader
              title='Dynamic Sizing with Max Height'
              appearance='compact'
              description='This bottom sheet has a max height of 250px'
            />
            <View className='flex flex-col gap-12'>
              {Array.from({ length: 15 }).map((_, index) => (
                <Text className='text-base' key={index}>
                  Item {index + 1}: Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Vitae excepturi odit, quis tenetur iste
                  perspiciatis mollitia porro velit laborum quasi.
                </Text>
              ))}
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    );
  },
};

export const PreventClose: Story = {
  args: {
    snapPoints: 'full',
    hideCloseButton: true,
    enablePanDownToClose: false,
    backdropPressBehavior: 'none',
  },
  render: (args) => {
    const bottomSheetRef = useBottomSheetRef();

    return (
      <View className='h-320 w-full items-center justify-center pt-32'>
        <Button size='xs' onPress={() => bottomSheetRef.current?.expand()}>
          Toggle open
        </Button>
        <BottomSheet {...args} ref={bottomSheetRef}>
          <BottomSheetView>
            <BottomSheetHeader
              title='Hidden Close Button'
              appearance='compact'
              description='This bottom sheet cannot be closed by dragging or button'
            />
            <View className='flex flex-col gap-12'>
              {Array.from({ length: 3 }).map((_, index) => (
                <Text className='text-base' key={index}>
                  Item {index + 1}: This bottom sheet stays open and cannot be
                  dismissed by the user. You would need to programmatically
                  close it using the ref.
                </Text>
              ))}
            </View>
          </BottomSheetView>
        </BottomSheet>
      </View>
    );
  },
};

export const ScrollView: Story = {
  args: {
    snapPoints: 'full',
    hideCloseButton: false,
    enableHandlePanningGesture: true,
    enablePanDownToClose: true,
    enableBlurKeyboardOnGesture: true,
    enableDynamicSizing: false,
    detached: false,
  },
  render: (args) => {
    const bottomSheetRef = useBottomSheetRef();

    return (
      <View className='h-320 w-full items-center justify-center bg-base pt-32'>
        <Button size='xs' onPress={() => bottomSheetRef.current?.expand()}>
          Toggle open
        </Button>
        <BottomSheet {...args} ref={bottomSheetRef}>
          <BottomSheetScrollView>
            <BottomSheetHeader
              title='Scrollable Content'
              appearance='compact'
              description='This bottom sheet contains a scrollable view'
            />
            <View className='flex flex-col gap-12'>
              {Array.from({ length: 20 }).map((_, index) => (
                <Text className='text-base' key={index}>
                  Item {index + 1}: Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Vitae excepturi odit, quis tenetur iste
                  perspiciatis mollitia porro velit laborum quasi numquam
                  reiciendis dolor!
                </Text>
              ))}
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    );
  },
};

export const VirtualList: Story = {
  args: {
    snapPoints: 'full',
    hideCloseButton: false,
    enableHandlePanningGesture: true,
    enablePanDownToClose: true,
    enableBlurKeyboardOnGesture: true,
    enableDynamicSizing: false,
    detached: false,
  },
  render: (args) => {
    const bottomSheetRef = useBottomSheetRef();

    type ListItem = {
      id: string;
      title: string;
      description: string;
    };

    const data: ListItem[] = Array.from({ length: 100 }, (_, i) => ({
      id: i.toString(),
      title: `Item ${i + 1}`,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    }));

    return (
      <View className='h-320 w-full items-center justify-center pt-32'>
        <Button size='xs' onPress={() => bottomSheetRef.current?.expand()}>
          Toggle open
        </Button>
        <BottomSheet {...args} ref={bottomSheetRef}>
          <BottomSheetHeader
            spacing
            title='Virtual List'
            appearance='compact'
            description='This bottom sheet contains a virtualized list'
          />
          <BottomSheetFlatList
            data={data}
            keyExtractor={(item) => (item as ListItem).id}
            renderItem={({ item }) => {
              const typedItem = item as ListItem;
              return (
                <View className='flex flex-col gap-4 border-b border-base py-12'>
                  <Text className='text-base body-2-semi-bold'>
                    {typedItem.title}
                  </Text>
                  <Text className='text-muted body-3'>
                    {typedItem.description}
                  </Text>
                </View>
              );
            }}
          />
        </BottomSheet>
      </View>
    );
  },
};

export const VirtualizedList: Story = {
  args: {
    snapPoints: 'full',
    hideCloseButton: false,
    enableHandlePanningGesture: true,
    enablePanDownToClose: true,
    enableBlurKeyboardOnGesture: true,
    enableDynamicSizing: false,
    detached: false,
  },
  render: (args) => {
    const bottomSheetRef = useBottomSheetRef();

    type ListItem = {
      id: string;
      title: string;
      description: string;
    };

    const data: ListItem[] = Array.from({ length: 100 }, (_, i) => ({
      id: i.toString(),
      title: `Item ${i + 1}`,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    }));

    return (
      <View className='h-320 w-full items-center justify-center pt-32'>
        <Button size='xs' onPress={() => bottomSheetRef.current?.expand()}>
          Toggle open
        </Button>
        <BottomSheet {...args} ref={bottomSheetRef}>
          <BottomSheetHeader
            spacing
            title='Virtualized List'
            appearance='compact'
            description='This bottom sheet uses a VirtualizedList with custom getItem/getItemCount'
          />
          <BottomSheetVirtualizedList
            data={data}
            getItem={(items, index) => {
              const typedData = items as ListItem[];
              return typedData[index];
            }}
            getItemCount={(items) => {
              const typedData = items as ListItem[];
              return typedData.length;
            }}
            keyExtractor={(item) => (item as ListItem).id}
            renderItem={({ item }) => {
              const typedItem = item as ListItem;
              return (
                <View className='flex flex-col gap-4 border-b border-base py-12'>
                  <Text className='text-base body-2-semi-bold'>
                    {typedItem.title}
                  </Text>
                  <Text className='text-muted body-3'>
                    {typedItem.description}
                  </Text>
                </View>
              );
            }}
          />
        </BottomSheet>
      </View>
    );
  },
};
