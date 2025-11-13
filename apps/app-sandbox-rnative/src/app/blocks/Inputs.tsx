import { AddressInput, Search, TextInput } from '@ledgerhq/ldls-ui-rnative';
import { Eye, EyeCross } from '@ledgerhq/ldls-ui-rnative/symbols';
import { useEffect, useState } from 'react';
import { Alert, Pressable, View } from 'react-native';

export function Inputs() {
  const [team, setTeam] = useState<string>();
  const [isTeamValid, setIsTeamValid] = useState(true);

  useEffect(() => {
    if (team) {
      setIsTeamValid(team.toLowerCase() === 'ldls');
    }
  }, [team]);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className='gap-8'>
      <TextInput
        label='Username'
        className='min-w-full'
        onClear={() =>
          Alert.alert('Custom handler', 'You found an easter egg!', [
            { text: 'Okay', style: 'default' },
          ])
        }
      />
      <TextInput
        label='Password'
        className='min-w-full'
        secureTextEntry={!showPassword}
        hideClearButton
        suffix={
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeCross size={20} className='text-base' />
            ) : (
              <Eye size={20} className='text-base' />
            )}
          </Pressable>
        }
      />
      <TextInput
        label='Company'
        className='min-w-full'
        defaultValue='Ledger'
        editable={false}
      />
      <TextInput
        label='Team'
        className='min-w-full'
        value={team}
        onChangeText={setTeam}
        errorMessage={
          !isTeamValid && team !== undefined
            ? 'Team must match "ldls"!'
            : undefined
        }
      />
      <TextInput
        label='A very long label that should really be truncated at different breakpoints'
        className='min-w-full'
        defaultValue='This is a default value!'
      />
      <Search className='min-w-full' placeholder='Search for a component...' />
      <AddressInput
        className='min-w-full'
        placeholder='Enter address or ENS'
        onQrCodeClick={() =>
          Alert.alert(
            'Copied!',
            'You can now proceed with your transaction on your phone.',
          )
        }
      />
    </View>
  );
}
