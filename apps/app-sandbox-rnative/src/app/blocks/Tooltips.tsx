import {
  Tag,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@ledgerhq/lumen-ui-rnative';
import { InformationFill } from '@ledgerhq/lumen-ui-rnative/symbols';
import { Text, View } from 'react-native';

export const Tooltips = () => {
  return (
    <View className='flex flex-row gap-12'>
      <Tooltip>
        <TooltipTrigger>
          <InformationFill lx={{ color: 'base' }} size={20} />
        </TooltipTrigger>
        <TooltipContent
          title='Tooltip title'
          content={
            <View className='flex flex-row items-center gap-4'>
              <Text className='text-muted'>
                Custom tooltip content ReactNode!{' '}
              </Text>
              <Tag label='Tag' appearance='accent' />
            </View>
          }
        />
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <InformationFill lx={{ color: 'base' }} size={20} />
        </TooltipTrigger>
        <TooltipContent
          title='Simple tooltip title'
          content='Simple tooltip content'
        />
      </Tooltip>
    </View>
  );
};
