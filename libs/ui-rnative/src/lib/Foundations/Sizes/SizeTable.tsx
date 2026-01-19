import { View } from 'react-native';
import { resolveTheme } from '..';

export const SizeTable = () => {
  const sizes = resolveTheme().sizes;

  const cells = Object.entries(sizes).filter(([, size]) => Number(size) < 100);

  const renderSample = (value: number | string) => {
    const numericValue = value === '100%' ? 100 : Number(value);
    const displaySize = Math.min(numericValue, 64);

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View
          style={{
            width: numericValue,
            height: numericValue,
            backgroundColor: '#6490F1',
            borderRadius: 4,
          }}
        />
      </View>
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Sample</th>
          <th>Name</th>
          <th>Theme object</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {cells.map(([key, value], i) => (
          <tr key={i}>
            <td>
              <View style={{ alignItems: 'baseline' }}>
                {renderSample(value)}
              </View>
            </td>
            <td>
              <strong>{key}</strong>
            </td>
            <td>
              <code>{`theme.sizes.${key}`}</code>
            </td>
            <td>
              <code>{`${value}px`}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
