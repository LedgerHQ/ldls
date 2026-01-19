import { View } from 'react-native';
import { resolveTheme } from '..';

export const BorderRadiusTable = () => {
  const borderRadius = resolveTheme().borderRadius;

  if (!borderRadius) {
    return <div>Oops, no border radius tokens found</div>;
  }

  const cells = Object.entries(borderRadius);

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
              <View style={{ alignItems: 'center' }}>
                <View
                  style={{
                    width: 78,
                    height: 52,
                    backgroundColor: '#e1e1e1',
                    borderRadius: value,
                  }}
                />
              </View>
            </td>
            <td>
              <strong>{key}</strong>
            </td>
            <td>
              <code>{`theme.borderRadius.${key}`}</code>
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
