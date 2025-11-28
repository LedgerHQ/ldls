import { cn } from '@ledgerhq/ldls-utils-shared';
import React, { useCallback, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Check } from '../../Symbols';
import {
  BottomSheet,
  BottomSheetHeader,
  BottomSheetView,
  useBottomSheetRef,
} from '../BottomSheet';
import { useGlobalSelectSafeContext } from './GlobalSelectContext';

/**
 * BottomSheet component that displays select options.
 * This should be placed at the root level inside GestureHandlerRootView.
 *
 * @see {@link https://ldls.vercel.app/?path=/docs/components-select-overview--docs Storybook}
 *
 * @example
 * import { GlobalSelectProvider, GlobalSelectBottomSheet } from '@ledgerhq/ldls-ui-rnative';
 *
 * function App() {
 *   return (
 *     <GestureHandlerRootView>
 *       <YourAppContent />
 *       <GlobalSelectBottomSheet />
 *     </GestureHandlerRootView>
 *   );
 * }
 */
export const GlobalSelectBottomSheet: React.FC = () => {
  const bottomSheetRef = useBottomSheetRef();
  /**
   * This is the only component that subscribes to currentSelect
   * All other components use refs to avoid re-renders
   */
  const { currentSelect, hideSelectRef } = useGlobalSelectSafeContext({
    consumerName: 'useGlobalSelectBottomSheetContext',
    contextRequired: true,
  });

  useEffect(() => {
    if (currentSelect) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [currentSelect, bottomSheetRef]);

  const handleClose = useCallback(() => {
    currentSelect?.setOpen?.(false);
    hideSelectRef.current();
  }, [hideSelectRef, currentSelect]);

  const handleSelectItem = useCallback(
    (value: string) => {
      if (currentSelect) {
        currentSelect.onSelectValue(value);
        currentSelect.setOpen?.(false);
        hideSelectRef.current();
      }
    },
    [currentSelect, hideSelectRef],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={null}
      backdropPressBehavior='close'
      onClose={handleClose}
      maxDynamicContentSize='fullWithOffset'
      enableDynamicSizing
      enablePanDownToClose
    >
      <BottomSheetView>
        {currentSelect && (
          <>
            {currentSelect.label && (
              <BottomSheetHeader
                title={currentSelect.label}
                appearance='expanded'
              />
            )}
            <View className='gap-4'>
              {currentSelect.items.map((item) => {
                const isSelected = currentSelect.selectedValue === item.value;
                return (
                  <Pressable
                    key={item.value}
                    disabled={item.disabled}
                    onPress={() => handleSelectItem(item.value)}
                  >
                    {({ pressed }) => (
                      <View
                        className={cn(
                          'flex-row items-center rounded-sm p-8 bg-base-transparent',
                          pressed && 'bg-base-transparent-pressed',
                          item.disabled && 'opacity-50',
                        )}
                      >
                        <Text
                          className={cn(
                            'flex-1 text-base body-2',
                            item.disabled && 'text-disabled',
                          )}
                          numberOfLines={1}
                        >
                          {item.label}
                        </Text>
                        {isSelected && (
                          <Check size={24} className='text-active' />
                        )}
                      </View>
                    )}
                  </Pressable>
                );
              })}
            </View>
          </>
        )}
      </BottomSheetView>
    </BottomSheet>
  );
};
