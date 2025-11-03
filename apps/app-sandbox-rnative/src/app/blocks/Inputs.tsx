import { TextInput } from '@ledgerhq/ldls-ui-rnative';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';

export function Inputs() {
  const [team, setTeam] = useState<string>();
  const [isTeamValid, setIsTeamValid] = useState(true);

  useEffect(() => {
    if (team) {
      setIsTeamValid(team.toLowerCase() === 'ldls');
    }
  }, [team]);

  return (
    <View className='gap-8'>
      <TextInput
        label='Username'
        containerClassName='min-w-full'
        onClear={() =>
          Alert.alert('Custom handler', 'You found an easter egg!', [
            { text: 'Okay', style: 'default' },
          ])
        }
      />
      <TextInput
        label='Password'
        containerClassName='min-w-full'
        secureTextEntry
        hideClearButton
      />
      <TextInput
        label='Company'
        containerClassName='min-w-full'
        defaultValue='Ledger'
        editable={false}
      />
      <TextInput
        label='Team'
        containerClassName='min-w-full'
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
        containerClassName='min-w-full'
        defaultValue='This is a default value!'
      />
    </View>
  );
}
