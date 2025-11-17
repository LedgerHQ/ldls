/* eslint-disable @typescript-eslint/no-explicit-any */
// Mock @gorhom/bottom-sheet with more detailed prop tracking
jest.mock('@gorhom/bottom-sheet', () => {
  const mockReact = jest.requireActual<typeof import('react')>('react');
  const mockRN =
    jest.requireActual<typeof import('react-native')>('react-native');

  const mockRef = {
    expand: jest.fn(),
    close: jest.fn(),
    snapToIndex: jest.fn(),
    snapToPosition: jest.fn(),
    forceClose: jest.fn(),
  };

  return {
    __esModule: true,
    default: mockReact.forwardRef((props: any, ref: any) => {
      mockReact.useEffect(() => {
        if (ref) {
          if (typeof ref === 'function') ref(mockRef);
          else ref.current = mockRef;
        }
      }, [ref]);

      return mockReact.createElement(mockRN.View, {
        testID: props.testID,
        'data-snap-points': JSON.stringify(props.snapPoints),
        'data-enable-dynamic-sizing': String(props.enableDynamicSizing),
        'data-enable-pan-down-to-close': String(props.enablePanDownToClose),
        'data-detached': String(props.detached),
        'data-enable-handle-panning-gesture': String(
          props.enableHandlePanningGesture,
        ),
        children: props.children,
      } as any);
    }),
    BottomSheetBackdrop: () => null,
    BottomSheetScrollView: ({ children }: any) =>
      mockReact.createElement(mockRN.ScrollView, { children }),
    useBottomSheet: () => mockRef,
  };
});

// Mock react-native-css-interop to pass through components unchanged
jest.mock('react-native-css-interop', () => {
  const mockReact = jest.requireActual<typeof import('react')>('react');
  return {
    cssInterop: (component: any) => component,
    createInteropElement: (component: any, ...args: any[]) =>
      mockReact.createElement(component, ...args),
  };
});
