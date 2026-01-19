import { View } from 'react-native';
import { resolveTheme, SAMPLE_BG_PRIMARY_COLOR } from '..';

export const BorderRadiusTable = () => {
  const borderRadius = resolveTheme().borderRadius;
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
              <View style={{ paddingVertical: 12 }}>
                <View
                  style={{
                    width: 64,
                    height: 64,
                    backgroundColor: SAMPLE_BG_PRIMARY_COLOR,
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
