import { View } from 'react-native';
import { resolveTheme, SAMPLE_BG_PRIMARY_COLOR } from '..';

export const SpacingTable = () => {
  const spacings = resolveTheme().spacings;
  const cells = Object.entries(spacings);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Theme object</th>
          <th>Value</th>
          <th>Sample</th>
        </tr>
      </thead>
      <tbody>
        {cells.map(([key, value], i) => (
          <tr key={i}>
            <td>
              <strong>{key}</strong>
            </td>
            <td>
              <code>{`theme.spacings.${key}`}</code>
            </td>
            <td>
              <code>{`${value}px`}</code>
            </td>
            <td>
              <View
                style={{
                  width: value,
                  height: 16,
                  backgroundColor: SAMPLE_BG_PRIMARY_COLOR,
                  borderRadius: 2,
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
