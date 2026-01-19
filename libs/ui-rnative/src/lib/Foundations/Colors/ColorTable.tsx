import {
  ledgerLiveThemes,
  enterpriseThemes,
  websitesThemes,
} from '@ledgerhq/lumen-design-core';
import { Text, View } from 'react-native';
import { getGlobals, resolveTheme } from '..';

type ColorTableProps = {
  category: 'bg' | 'text' | 'border' | 'crypto' | 'discover';
};

export const ColorTable = ({ category }: ColorTableProps) => {
  const colors = resolveTheme().colors[category];

  if (!colors) {
    return <div>Oops, no colors found for category: {category}</div>;
  }

  const cells = Object.entries(colors).filter(([, v]) => {
    return !(category === 'crypto' && v.endsWith('00')); // filter out "[crypto] 0" tokens
  });

  const renderSample = (value: string) => {
    if (category === 'text') {
      return (
        <Text
          style={{
            color: value,
            fontWeight: 'bold',
            paddingHorizontal: 4,
            ...(isCloseToWhite(value) && {
              backgroundColor: 'black',
              borderRadius: 6,
            }),
          }}
        >
          Aa
        </Text>
      );
    }
    if (category === 'border') {
      return (
        <View
          style={{
            width: 24,
            height: 24,
            borderWidth: 2,
            borderColor: value,
            borderRadius: 8,
          }}
        />
      );
    }
    return (
      <View
        style={{
          backgroundColor: value,
          width: 24,
          height: 24,
          borderRadius: 8,
          ...(isCloseToWhite(value) && {
            borderWidth: 1,
            borderColor: 'lightgrey',
          }),
        }}
      />
    );
  };

  /**
   * Compute the background color of the sample cell based on how close
   * the sample is to white.
   * @param hex
   */
  const isCloseToWhite = (hex: string, threshold = 230) => {
    // treat full transparency as white
    if (parseInt(hex.slice(7, 9)) === 0) {
      return true;
    }

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return (r + g + b) / 3 >= threshold;
  };

  const formatTokenName = (key: string): string => {
    return key
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([a-zA-Z])(\d+)/g, '$1 $2')
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Sample</th>
          <th>Name</th>
          <th>Theme object</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {cells.map(([key, value], i) => (
          <tr key={i}>
            <td>
              <View style={{ alignItems: 'center' }}>
                {renderSample(value)}
              </View>
            </td>
            <td>
              <strong>{formatTokenName(key)}</strong>
            </td>
            <td>
              <code>{`theme.colors.${category}.${key}`}</code>
            </td>
            <td>
              <code>{value}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
