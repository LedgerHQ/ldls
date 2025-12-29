/* eslint-disable jsx-a11y/accessible-emoji */
import {
  Box,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@ledgerhq/lumen-ui-rnative';
import { useState } from 'react';

function Base() {
  const [value, setValue] = useState<string>();

  return (
    <Box>
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
    </Box>
  );
}

function WithGroups() {
  const [value, setValue] = useState<string>();

  return (
    <Box>
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
    </Box>
  );
}

export function Selects() {
  return (
    <Box lx={{ width: 'full', gap: 's8' }}>
      <Base />
      <WithGroups />
    </Box>
  );
}
