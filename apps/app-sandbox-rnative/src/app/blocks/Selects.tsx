/* eslint-disable jsx-a11y/accessible-emoji */
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@ledgerhq/ldls-ui-rnative';
import { useState } from 'react';
import { View } from 'react-native';

function Base() {
  const [value, setValue] = useState<string>();

  return (
    <View>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger label='Italian dish'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='lasagna'>
            <SelectItemText>Lasagna</SelectItemText>
          </SelectItem>
          <SelectItem value='carbonara'>
            <SelectItemText>Carbonara</SelectItemText>
          </SelectItem>
          <SelectItem value='gnocchi'>
            <SelectItemText>Gnocchi</SelectItemText>
          </SelectItem>
          <SelectItem value='risotto'>
            <SelectItemText>Risotto</SelectItemText>
          </SelectItem>
          <SelectItem value='osso-buco'>
            <SelectItemText>Osso Buco</SelectItemText>
          </SelectItem>
        </SelectContent>
      </Select>
    </View>
  );
}

function WithGroups() {
  const [value, setValue] = useState<string>();

  return (
    <View>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger label='City'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>🇫🇷 France</SelectLabel>
            <SelectItem value='paris'>
              <SelectItemText>Paris</SelectItemText>
            </SelectItem>
            <SelectItem value='lyon'>
              <SelectItemText>Lyon</SelectItemText>
            </SelectItem>
            <SelectItem value='nice'>
              <SelectItemText>Nice</SelectItemText>
            </SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>🇵🇹 Portugal</SelectLabel>
            <SelectItem value='porto'>
              <SelectItemText>Porto</SelectItemText>
            </SelectItem>
            <SelectItem value='lisbon'>
              <SelectItemText>Lisbon</SelectItemText>
            </SelectItem>
            <SelectItem value='madeira'>
              <SelectItemText>Madeira</SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </View>
  );
}

export function Selects() {
  return (
    <View className='w-full gap-8'>
      <Base />
      <WithGroups />
    </View>
  );
}
