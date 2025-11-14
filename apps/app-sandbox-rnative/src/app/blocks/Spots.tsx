import { Spot } from '@ledgerhq/ldls-ui-rnative';
import { ExternalLink } from '@ledgerhq/ldls-ui-rnative/symbols';
import { View } from 'react-native';

export const Spots = () => {
  return (
    <View className='gap-32'>
      <View className='flex flex-row flex-wrap gap-8'>
        <Spot appearance='icon' icon={ExternalLink} />
        <Spot appearance='icon' icon={ExternalLink} disabled />
        <Spot appearance='number' number={5} />
        <Spot appearance='bluetooth' />
        <Spot appearance='check' />
        <Spot appearance='error' />
        <Spot appearance='warning' />
        <Spot appearance='info' />
        <Spot appearance='loader' />
      </View>
      <View className='flex flex-row gap-8'>
        <Spot appearance='icon' icon={ExternalLink} size={48} />
        <Spot appearance='icon' icon={ExternalLink} size={56} />
        <Spot appearance='icon' icon={ExternalLink} size={72} />
      </View>
    </View>
  );
};
